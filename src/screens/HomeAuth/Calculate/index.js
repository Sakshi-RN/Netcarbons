import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import imagePaths from '../../../utilities/imagePaths';
import CircularProgressChart from '../../../components/circulerProgressChart';
import styles from './style';
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';

const Calculate = ({ route, navigation }) => {
    const { carbonEmissionParam } = route?.params;
    const [email, setEmail] = useState("");

    const CircularProgressBar = () => {
        const [progress, setProgress] = useState(50); // Corrected syntax error here
        const size = 200;
        const strokeWidth = 20;
        const radius = (size - strokeWidth) / 2;

        const handleBackPress = () => {
            navigation.goBack();
        };

        const progresBar = () => {
            return (
                <>
                    {carbonEmissionParam != undefined &&
                        <CircularProgressChart
                            total={carbonEmissionParam}
                            footprint={12}
                            cost={84.00}
                            reduction={12}
                            size={200}
                        />
                    }
                </>
            )
        }

        return (
            <View style={styles.container}>
                <ImageBackground
                    source={imagePaths.loginTopVector}
                    style={styles.backgroundStyle}
                >
                    <CommonHeader onBackPress={handleBackPress} showCancelBtn={true} />
                </ImageBackground>
                <ScrollView style={styles.scrolViewWrapper} showsVerticalScrollIndicator={false}>
                    <Text style={styles.chooseAmountLabel}>Choose Amount or Tons</Text>
                    <View style={styles.productSelectedColumn}>
                        {progresBar()}
                        <Text style={styles.productSelectedText}>Product Selected</Text>
                        <Text style={styles.productDescText}>119.8MW - India Carbon* - Energy</Text>
                        <Text style={styles.productDescText}>Industries (Renewable/Non-renewable </Text>
                        <Text style={styles.productDescText}>source) - $7.00 </Text>
                    </View>
                </ScrollView>
                <View style={styles.bottomButtonRow}>
                    <TouchableOpacity style={styles.chooseProductButton}>
                        <Text style={styles.chooseProductText}>Choose Product</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buynowButton}>
                        <Text style={styles.buyNowText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <CircularProgressBar />
        </View>
    );
};

export default Calculate;
