import React, {useState, useEffect} from 'react'
import {View, KeyboardAvoidingView, Text, Platform, TouchableOpacity} from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import Header from '../../../components/header'

const LetsGo = (props) => {
    useEffect(() => {
		setTimeout(() => {
		  props.navigation.navigate("Home")
				
		}, 3000); 	
	},[8000]);
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
                            imagePath={imagePaths.thanksRegisterVector}
                            maxWidth={"100%"} maxHeight={Platform.OS == "ios" ? 450 : 300}
                        />

                        <View style={styles.headerRowAdjust}>
                            <Header 
                                navigation={props.navigation}
                                centerLogo={true}
                                rightIcon={
                                    <TouchableOpacity 
                                    style={{paddingRight:0}}
                                        // onPress={()=> logoutUser()}
                                    >
                                        <Text style={{opacity:0}}>Logt</Text>
                                    </TouchableOpacity>
                                }
                                backIcon={true}
                            />
                        </View>
                    </View>
                    

                    <View style={styles.titleWrapper}>
                        <Text style={styles.titleText}>
                            Let's go!
                        </Text>

                        <Text style={styles.subTitleText}>
                            Now you can do your part to solve the global warming crisis
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={styles.greenCardRow}>
                        <View style={styles.greenCardLeft}>
                            <ImageWrapper
                                imagePath={imagePaths.percentIcon}
                                maxWidth={24} maxHeight={24}
                            />
                        </View>
                        <View style={styles.greenCardRight}>
                            <Text style={styles.greenCardText}>
                                I want to calculate my carbon footprint
                            </Text>
                        </View>
                    </View>

                    <View style={styles.blueCardRow}>
                        <View style={styles.greenCardLeft}>
                            <ImageWrapper
                                imagePath={imagePaths.gridIcon}
                                maxWidth={24} maxHeight={24}
                            />
                        </View>
                        <View style={styles.greenCardRight}>
                            <Text style={styles.greenCardText}>
                                I want to explore emission reduction projects
                            </Text>
                        </View>
                    </View>
                </View>
            
            </View>
        </View>
	</KeyboardAvoidingView>
)}

export default LetsGo
