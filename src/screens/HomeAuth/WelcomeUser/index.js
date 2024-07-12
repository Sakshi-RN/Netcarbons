import React, {  } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import { CameraIcon } from '../../../assets'
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight } from 'react-native-responsive-dimensions'



const WelcomeUser = (props) => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };
    const handleCarbonFootPrint = () => {
        navigation.navigate("CalculateCarbonFootprint");
      };
      const handleCarbonProducts = () => {
        navigation.navigate("Home");
      };
    return (
        <View style={styles.container}>
            <CommonHeader
                onBackPress={handleBackPress}
                showCancelBtn={true}
            />
            <View style={styles.welcomeContainer}>
                <ImageWrapper
                    imagePath={imagePaths.thanksRegisterVector}
                    maxWidth={"100%"} maxHeight={responsiveHeight(47)} 
                />
            </View>

            <View style={styles.titleWrapper}>
                <View style={styles.CameraUploadIconBox}>
                    <CameraIcon />
                </View>
                <Text style={styles.subTitleText}>
                    Hello
                </Text>
                <Text style={styles.titleText}>
                    Good Morning
                </Text>
            </View>
            <TouchableOpacity style={styles.rowbannerFirst} onPress={handleCarbonFootPrint}>
                <ImageWrapper
                    imagePath={imagePaths.welcomeVectorSecond}
                    maxWidth={"100%"} maxHeight={82}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowbannerSecond} onPress={handleCarbonProducts}>
                <ImageWrapper
                    imagePath={imagePaths.welcomeVectorFirst}
                    maxWidth={"100%"} maxHeight={82}
                />
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeUser
