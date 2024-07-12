import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculateCarbonFootprint from "../screens/HomeAuth/CalculateCarbonFootprint";
import Calculate from "../screens/HomeAuth/Calculate";
const Stack = createNativeStackNavigator();

export const CalculateStack = (props) => (
	<Stack.Navigator
		initialRouteName="CalculateCarbonFootprint"
		screenOptions={{
			animation: "none",
			headerShown: false,
		}}
	>
		<Stack.Screen name="CalculateCarbonFootprint" component={CalculateCarbonFootprint} />
        <Stack.Screen name="Calculate" component={Calculate} />
	</Stack.Navigator>
);

