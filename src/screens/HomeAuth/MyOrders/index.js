import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';
import images from '../../../theme/Images';
import styles from './style';

const MyOrders = ({navigation}) => {
    const handleBackPress = () => {
        navigation.goBack();
    };

    const orders = [
        { id: 1 },
    ];


    const handleOrderDetails = () => {
        navigation.navigate('OrderDetails'); 
    };

    const renderMyorderList = () => {
        return (
            <ScrollView contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}>
                {orders.map(order => (
                    <View key={order.id} style={styles.orderContainer}>
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Text style={styles.orderDetails}>Order#:</Text>
                                <Text style={styles.orderItem}> 10002313111</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.orderDetails}>Date:</Text>
                                <Text style={styles.orderItem}> 2022-12-25</Text>
                            </View>
                        </View>
                        <View style={[styles.row, styles.imageRow]}>
                            <Image source={images.orderImg} style={styles.image} />
                            <View>
                                <Text style={[styles.orderItemText]}>Winston Creek IFM Project (1)</Text>
                                <View style={styles.priceRow}>
                                    <Text style={styles.orderDetails}>2 x $25.00 /</Text>
                                    <Text style={styles.orderItem}>$ 20.00</Text>
                                </View>
                                <Text style={[styles.orderItemText, styles.textMargin]}>$40.00</Text>
                            </View>
                        </View>
                        <View style={[styles.row, styles.marginTop]}>
                            <Text style={styles.orderItem}>Total: $14</Text>
                            <View style={styles.row}>
                                <Image source={images.downloadIcon} style={styles.icon} />
                                <Text style={styles.orderItem}>Order.pdf</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleOrderDetails}>
                            <Text style={styles.btnText}>
                                ORDER DETAILS
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <CommonHeader
                title="My Orders"
                onBackPress={handleBackPress}
                showCancelBtn={true}
            />
            {renderMyorderList()}
        </View>
    );
};

export default MyOrders;
