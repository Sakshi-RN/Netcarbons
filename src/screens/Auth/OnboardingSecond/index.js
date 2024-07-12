import React, {} from 'react'
import {View, KeyboardAvoidingView, Text, Platform, TouchableOpacity,ScrollView} from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import {CarouselStepTwoIcon } from '../../../assets'
import MainButton from '../../../components/MainButton'


const OnboardingSecond = (props) => {
  return (
	<KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={styles.container}
	>
        <ScrollView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <View>
                    <View style={styles.centerWelcomeWrapper}>                            
                        <ImageWrapper
                            imagePath={imagePaths.onboardingThree}
                            maxWidth={"100%"} maxHeight={Platform.OS == "ios" ? 450 : 390}
                        />
                        
                        <View style={styles.logoWrapper}>
                            <View style={styles.headerRow}>
                                <View>
                                    <Text style={styles.onethreeText}>2/3</Text>
                                </View>

                                <View>
                                    <ImageWrapper
                                        imagePath={imagePaths.logoNew}
                                        maxWidth={135} maxHeight={24}
                                    />
                                </View>

                                <TouchableOpacity onPress={()=> props.navigation.navigate("LetStart")}>
                                    <Text style={styles.skipText}>SKIP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    

                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>
                            Welcome to
                        </Text>
                        <Text style={styles.titleText}>
                            Netcarbons
                        </Text>

                        <Text style={styles.subTitleText}>
                            Switch to sustainable 
                        </Text>
                        
                        <Text style={[styles.subTitleText, {marginTop:5}]}>
                            energy sources
                        </Text>
                        
                        <View style={styles.carouselIconWrapper}>
                            <View style={styles.lines}/>
                            <View style={[styles.lines,{backgroundColor:'black'}]}/>
                            <View style={styles.lines}/>
                        </View>

                    </View>
                </View>

                <View style={styles.btnWrapper}>    
                    <MainButton
                        title="Next"
                        onPress={()=> props.navigation.navigate("OnboardingThird")}
                    />  
                </View>
            
            </View>
        </ScrollView>

	</KeyboardAvoidingView>
)}

export default OnboardingSecond
