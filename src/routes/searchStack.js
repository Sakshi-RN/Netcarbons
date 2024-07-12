import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/HomeAuth/Search";
import Results from "../screens/HomeAuth/Results";
const Stack = createNativeStackNavigator();

export const SearchStack = (props) => (
	<Stack.Navigator
		initialRouteName="Search"
		screenOptions={{
			animation: "none",
			headerShown: false,
		}}
	>
		<Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Results" component={Results} />
	</Stack.Navigator>
);

