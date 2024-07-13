import React, {  } from 'react';
import { View, Text, Platform } from 'react-native';
import MainButton from '../../../components/MainButton';
import ImageWrapper from '../../../components/image';
import imagePaths from '../../../utilities/imagePaths';
import styles from './style';
import CountryWithFlag from '../../../components/CountryWithFlag';

const ChooseCountry = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageWrapper
                imagePath={imagePaths.chooseCountry}
                maxWidth={"100%"}
                maxHeight={Platform.OS === 'ios' ? 500 : 390}
            />
            <Text style={styles.titleText}>
                Choose your country
            </Text>
            <Text style={styles.subTitleText}>
                First step before using Netcarbons
            </Text>
            <CountryWithFlag />
            <View style={styles.btnWrapper}>
                <MainButton
                    title="CONTINUE"
                    onPress={() => navigation.navigate("OnboardingFirst")}
                />
            </View>
        </View>
    );
}

export default ChooseCountry;
