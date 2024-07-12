import React, {useEffect} from 'react'
import {View, KeyboardAvoidingView, Text} from 'react-native'
import MainContainer from '../../../components/mainContainer'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import { InvertedCommaIcon } from '../../../assets'
import MainButton from '../../../components/MainButton'

const Start = ({navigation}) => {
  return (
	// <KeyboardAvoidingView
	// 	behavior={Platform.OS === "ios" ? "padding" : "height"}
	// 	style={styles.container}
	// >
		// <MainContainer fluid={true}>
			<View style={styles.container}>
				<View style={styles.welcomeContainer}>
					<View></View>
					<View style={styles.centerWelcomeWrapper}>
						<InvertedCommaIcon/>
						<Text style={styles.descText}>
							Together, we can solve the global warming crisis if we just reduce our own carbon footprint.
						</Text>

						<ImageWrapper
							imagePath={imagePaths.logoNew}
							maxWidth={152} maxHeight={27}
						/>
					</View>

					<View style={styles.btnWrapper}>
						<MainButton
							title="Start"
							onPress={()=> navigation.navigate("OnboardingFirst")}
						/>  
					</View>
				
				</View>
			</View>
		// </MainContainer>
	// </KeyboardAvoidingView>
)}

export default Start
