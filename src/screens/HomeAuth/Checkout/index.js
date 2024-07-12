import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';
import InputField from '../../../components/CommonInput/InputField';
import MainButton from '../../../components/MainButton';
import styles from './style';
import images from '../../../theme/Images';

const Checkout = ({navigation}) => {

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleConfirmAndContinue = () => {
        navigation.navigate('ConfirmOrder'); 
    };

    return (
        <View style={styles.container}>
            <CommonHeader
                cancelText="Cancel"
                title="Address"
                rightText="2/3"
                initialCancelBtn={true}
                onBackPress={handleBackPress}
            />
            <ScrollView contentContainerStyle={styles.content}
             showsVerticalScrollIndicator={false}>
                <Text style={styles.choosePaymentText}>Choose a payment method</Text>
                <Text style={styles.reviewOrderText}>You will not be charged until you review order in the next page.</Text>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.radioButton}>
                            <View style={styles.Circle} />
                        </TouchableOpacity>
                        <Text style={styles.paymentMethodText}>Credit card</Text>
                    </View>
                    <Image source={images.cards} />
                </View>
                <View style={styles.inputContainer}>
                    <InputField placeholder="John Smith" label="Name on Card" />
                </View>
                <View style={styles.inputContainer}>
                    <InputField placeholder="example@gmail.com" label="Card number" />
                </View>
                <View style={styles.row}>
                    <View style={styles.halfWidth}>
                        <InputField
                            placeholder="MM/YY"
                            label="Expiration date"
                        />
                    </View>
                    <View style={styles.halfWidth}>
                        <InputField placeholder="CVC" label="Security Code" />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.radioButton}>
                            <View style={styles.Circle} />
                        </TouchableOpacity>
                        <Text style={styles.paymentMethodText}>Apple Pay</Text>
                    </View>
                    <Image source={images.applepay} style={styles.appleIcon} />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <MainButton title="Confirm and Continue" onPress={handleConfirmAndContinue} /> 
            </View>
        </View>
    );
};

export default Checkout;
