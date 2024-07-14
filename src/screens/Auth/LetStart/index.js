import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Text, Platform, ScrollView, TouchableOpacity } from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import MainButton from '../../../components/MainButton'
import SecondaryButton from '../../../components/SecondaryButton'

const LetStart = ({ navigation }) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
      
            <ScrollView style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <View>
                        <View style={styles.centerWelcomeWrapper}>
                            {Platform.OS == "ios" ?
                                <ImageWrapper
                                    imagePath={imagePaths.letStart}
                                    maxWidth={"100%"} maxHeight={409}
                                />

                                :
                                <ImageWrapper
                                    imagePath={imagePaths.letStart}
                                    maxWidth={"100%"} maxHeight={330}
                                />
                            }
                            <View style={styles.logoWrapper}>
                                <ImageWrapper
                                    imagePath={imagePaths.logoNew}
                                    maxWidth={135} maxHeight={24}
                                />
                            </View>
                        </View>

                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>
                                Lets start using Netcarbons
                            </Text>
                            <Text style={styles.subTitleText}>
                                and solve the global warming crisis
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.btnWrapper}>
                            <MainButton
                                title="Sign up"
                                onPress={() => navigation.navigate("Register")}
                            />
                        </View>

                        <View style={styles.btnWrapper}>
                            <SecondaryButton
                                title="Log in"
                                style={styles.borderLogin}
                                onPress={() => navigation.navigate("Login")}
                            />
                        </View>

                        <TouchableOpacity style={styles.signupWrapper}  onPress={() => navigation.navigate("WelcomeUser")}>
                            <Text style={styles.signupText}>I’ll sign up later</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LetStart
