import React, {useEffect} from 'react'
import {View} from 'react-native'
import imagePaths from '../../../utilities/imagePaths'
import ImageWrapper from '../../../components/image'
import { CommonActions } from '@react-navigation/routers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'

const Splash = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
		  const login_type = AsyncStorage.getItem('loginUser')
		  .then((value) => {
			// console.log("splash user", value)
			if(value ==  null){
			  navigation.dispatch(CommonActions.reset({
				index: 0,
				routes: [
				  { name:'Start' },
				],
			  }))
			}else{
			  navigation.dispatch(CommonActions.reset({
				index: 0,
				routes: [
				  { name: 'Home' },
				],
			  }))
			}
		  });
				
		}, 3000); 	
	},[8000]);
  return (
			<View style={styles.container}>
				<ImageWrapper
					imagePath={imagePaths.logo}
					maxWidth={142} maxHeight={147}
				/>
			</View>
  )
}
export default Splash
