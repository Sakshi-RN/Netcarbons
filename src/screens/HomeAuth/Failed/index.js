import React from 'react';
import { View, Text, Image } from 'react-native';
import images from '../../../theme/Images';
import MainButton from '../../../components/MainButton';
import SecondaryButton from '../../../components/SecondaryButton';
import styles from './style'

const FailedScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={images.logoText} />
            <Image source={images.Mountain} style={styles.image} />
            <Text style={styles.title}>Oops!</Text>
            <Text style={styles.subtitle}>Failed to load your profile</Text>
            <View style={styles.buttonContainer}>
                <MainButton title={'Reload'} />
                <View style={styles.buttonSpacer} />
                <SecondaryButton title={'Go back'} />
            </View>
        </View>
    );
};



export default FailedScreen;
