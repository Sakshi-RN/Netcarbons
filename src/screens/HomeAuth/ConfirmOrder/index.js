import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';
import MainButton from '../../../components/MainButton';
import styles from './style';
import images from '../../../theme/Images';

const ConfirmOrder = ({navigation}) => {

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleConfirmOrder = () => {
        navigation.navigate('ThankyouPage'); 
    };

    const renderPayment = () => {
        return (
            <View style={styles.paymentContainer}>
                <View style={styles.row}>
                    <Text style={styles.paymentText}>Payment</Text>
                    <Text style={styles.editBtn}>Edit</Text>
                </View>
                <View style={[styles.row, styles.paymentRow]}>
                    <Image source={images.Visa} />
                    <Text style={styles.cardText}>**** 6789</Text>
                </View>
            </View>
        );
    }

    const renderDetail = () => {
        return (
            <View style={styles.paymentContainer}>
                <View style={styles.row}>
                    <Text style={styles.paymentText}>Detail</Text>
                    <Text style={styles.editBtn}>Edit</Text>
                </View>
                <Text style={styles.detailText}>1. Lorem ipsum dolor sit</Text>
            </View>
        );
    }

    const renderOrderSummary = () => {
        return (
            <View style={styles.billContainer}>
                <Text style={styles.summaryText}>Order Summary</Text>
                <View style={styles.row}>
                    <Text style={styles.SubtotalText}>Subtotal</Text>
                    <Text style={styles.SubtotalText}>16,7$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.summaryItemText}>Total</Text>
                    <Text style={styles.summaryItemText}>17,0$</Text>
                </View>
            </View>
        );
    }

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
                {renderPayment()}
                {renderDetail()}
            </ScrollView>
            <View style={styles.buttonContainer}>
                {renderOrderSummary()}
                <MainButton title="Confirm Order" onPress={handleConfirmOrder} /> 
            </View>
        </View>
    );
};

export default ConfirmOrder;
