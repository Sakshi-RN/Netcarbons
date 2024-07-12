import {
	Platform,
	ScrollView,
	StatusBar
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Colors } from "../../theme/colors";

const MainContainer = ({
	style,
	children,
	containerStyle,
	fluid
}) => {
	let offsetY = 0;
	return (
		<>
			{Platform.OS === "ios" &&
				<SafeAreaView style={[styles.containerWrapper, {
					backgroundColor:Colors.WHITE
				}]} 
					edges={['right', 'left']} 
				>
					<ScrollView style={fluid ? styles.fluid : null} scrollIndicatorInsets={{ right: 1 }}>
						{children}
					</ScrollView>
				</SafeAreaView>
			}
			{Platform.OS === "android" &&
				<SafeAreaView style={[styles.containerWrapper, {
					backgroundColor:Colors.WHITE
				}]} 
				forceInset={{ bottom: 'never' }}
				>
					<ScrollView style={fluid ? styles.fluid : null}>
						{children}
					</ScrollView>
				</SafeAreaView>
			}
		</>
	);
};

export default MainContainer;
