import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';
import styles from './style';
import MainButton from '../../../components/MainButton';
import images from '../../../theme/Images';
import Entypo from 'react-native-vector-icons/Entypo';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';

const ThankyouPage = ({ navigation }) => {

    const handleBackPress = () => {
        navigation.goBack();

    };
    const renderMiddle = () => {
        return (
            <View>
                <ImageBackground source={images.thankyouImg} style={styles.imageBackground}>
                    <Text style={styles.thankYouText}>Thanks for order!</Text>
                </ImageBackground>
            </View>
        )
    }

    const renderPurchaseOrder = () => {
        return (
            <View style={styles.purchaseOrderContainer}>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Qty</Text>
                    <Text style={styles.labelText}>Description</Text>
                    <Text style={styles.labelText}>Unit Price</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.valueText}>1</Text>
                    <Text style={styles.valueText}>Kariba Redd +</Text>
                    <Text style={styles.valueText}>$15</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.valueText}>2</Text>
                    <Text style={styles.valueText}>Kariba Redd +</Text>
                    <Text style={styles.valueText}>$15</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Item total</Text>
                    <Text style={styles.valueText}>3</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Sub total</Text>
                    <Text style={styles.valueText}>$15</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.row}>
                    <Text style={styles.labelText}>Total</Text>
                    <Text style={styles.valueText}>$15</Text>
                </View>
                <View style={styles.purchaseOrderDetails}>
                    <View style={styles.widthStyle}>
                        <Text style={styles.labelText}>Purchase order</Text>
                        <Image source={images.pdf} />
                    </View>
                    <Text style={styles.detailText}>Label name: Value</Text>
                    <Text style={styles.detailText}>Order #: 1234 5678 9012</Text>
                    <Text style={styles.detailText}>Email ID: ameya.pai@gmail.com</Text>
                    <Text style={styles.detailText}>Status: Success</Text>
                    <Text style={styles.detailText}>Date/Time: 2022-12-25, 15:45 EST (UTC-5)</Text>
                </View>
            </View>
        )
    }

    const renderSocialLogins = () => {
        return (
            <View style={styles.socialLoginsContainer}>
                <View style={styles.socialButtonsContainer}>
                    <Text style={styles.shareText}>Share:</Text>
                    <TouchableOpacity>
                        <Image source={images.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.whatsapp} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={images.linkedin} />
                    </TouchableOpacity>
                </View>
                <Image source={images.scanner} style={styles.scannerImage} />
                <Text style={styles.linkText}>https: netcarbons.com/id/dhfisf32rtrgfdlms/nffjdoihgbfljsfvfjbdfdd.html</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <CommonHeader />
            <ScrollView>
                {renderMiddle()}
                {renderPurchaseOrder()}
                {renderSocialLogins()}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <MainButton title='Close'
                onPress={handleBackPress} />
            </View>
        </View>
    );
};



export default ThankyouPage;
