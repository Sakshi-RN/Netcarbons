import React, {useState, useEffect} from 'react'
import {View, KeyboardAvoidingView, Text, Platform} from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import { CarouselStepOneIcon, CrossIcon } from '../../../assets'
import MainButton from '../../../components/MainButton'

const YouNotSigned = (props) => {
  return (
	<KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={styles.container}
	>
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <View>
                    <View style={styles.centerWelcomeWrapper}>
                        <ImageWrapper
                            imagePath={imagePaths.NotSignedVector}
                            maxWidth={"100%"} maxHeight={Platform.OS == "ios" ? 474 : 390}
                        />

                        <View style={styles.logoWrapper}>
                            <View style={styles.headerRow}>
                                <View style={{marginTop:5}}>
                                    <CrossIcon/>
                                </View>

                                <View>
                                    <ImageWrapper
                                        imagePath={imagePaths.logoNew}
                                        maxWidth={135} maxHeight={24}
                                    />
                                </View>

                                <View>
                                    {/* <Text style={styles.skipText}>SKIP</Text> */}
                                </View>
                            </View>
                        </View>
                    </View>
                    

                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>
                            Sign up for buy the product
                        </Text>

                        <Text style={styles.subTitleText}>
                            Lorem ipsun dolor sit ament, consectur ament elite
                        </Text>
                    </View>
                </View>

                <View style={styles.btnWrapper}>
                    <MainButton
                        title="Sign up"
                        onPress={()=> props.navigation.navigate("Register")}
                    />  
                </View>
            
            </View>
        </View>
	</KeyboardAvoidingView>
)}

export default YouNotSigned
