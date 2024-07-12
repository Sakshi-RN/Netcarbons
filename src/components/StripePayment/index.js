import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { StripeProvider, CardField, createToken } from '@stripe/stripe-react-native';

class StripeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInfo: null,
            isLoading: false,
        };
    }

    fetchCardDetail = (cardDetail) => {
        if (cardDetail.complete) {
            this.setState({ cardInfo: cardDetail });
        } else {
            this.setState({ cardInfo: null });
        }
    };

    onDone = async () => {
        const { cardInfo } = this.state;
        if (cardInfo) {
            try {
                this.setState({ isLoading: true });
                const resToken = await createToken({ ...cardInfo, type: 'Card' });
                console.log('resToken', resToken);
                // Handle successful token creation (e.g., send to server for payment)
                Alert.alert('Success', 'Payment token created successfully');
            } catch (error) {
                console.log('Error creating token:', error);
                Alert.alert('Error', 'Failed to create payment token. Please try again.');
            } finally {
                this.setState({ isLoading: false });
            }
        } else {
            Alert.alert('Incomplete Information', 'Please enter valid card details.');
        }
    };

    renderCardField = () => {
        return (
            <CardField
                postalCodeEnabled={true}
                placeholders={{
                    number: '4242 4242 4242 4242',
                }}
                cardStyle={{
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                }}
                style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30,
                }}
                onCardChange={(cardDetails) => {
                    this.fetchCardDetail(cardDetails);
                }}
                onFocus={(focusedField) => {
                    console.log('focusField', focusedField);
                }}
            />
        );
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StripeProvider
                    publishableKey="pk_test_51PYC9fRxMdVFM3P7UHM0DtaMc0hr5o2vBLVSP1QpXUw03UuuvD6l7FmJTzHC70epXb5Bw6tBc904SeWfRsIofeWH00jJl1RYPM"
                    merchantIdentifier="your_merchant_identifier"
                    urlScheme="your-url-scheme"
                >
                    {this.renderCardField()}
                    <TouchableOpacity
                        style={{
                            width: 200,
                            height: 40,
                            backgroundColor: 'orange',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                        }}
                        onPress={() => this.onDone()}
                        disabled={this.state.isLoading}
                    >
                        <Text style={{ color: 'white' }}>Pay Now</Text>
                    </TouchableOpacity>
                </StripeProvider>
            </View>
        );
    }
}

export default StripeScreen;
