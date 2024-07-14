import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import CommonHeader from "../../../components/HomeHeaders/CommonHeader";
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { fetchProfile } from "../../../redux/features/profileReducer";
import images from "../../../theme/Images";
import { useDispatch, useSelector } from "react-redux";



const WelcomeUser = () => {
    const navigation = useNavigation();
    const profile = useSelector((state) => state.profile.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfile());
    }, [navigation]);

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
            />
            <View style={styles.welcomeContainer}>
                <ImageWrapper
                    imagePath={imagePaths.thanksRegisterVector}
                    maxWidth={"100%"} maxHeight={responsiveHeight(47)}
                />
            </View>

            <View style={styles.titleWrapper}>
                <View style={styles.CameraUploadIconBox}>
                    <Image
                        source={
                            profile.data && profile.data?.profileImage
                                ? { uri: profile.data?.profileImage }
                                : images.uploadPic
                        }
                        style={styles.profileImage}
                    />

                </View>
                <Text style={styles.subTitleText}>
                    {profile.data?.firstName || profile.data?.lastName
                        ? 'Hello,' + " " + profile.data?.firstName + " " + profile.data?.lastName
                        : "Hello"}
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

