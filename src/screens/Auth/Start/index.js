import React from 'react'
import {View, Text} from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import styles from './style'
import { InvertedCommaIcon } from '../../../assets'
import MainButton from '../../../components/MainButton'

const Start = ({navigation}) => {
  return (

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
							onPress={()=> navigation.navigate("ChooseCountry")}
						/>  
					</View>
				</View>
			</View>

)}

export default Start
