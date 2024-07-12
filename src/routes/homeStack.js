import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeAuth/Home";
import Cart from "../screens/HomeAuth/Cart";
import Address from "../screens/HomeAuth/Address";
import Checkout from "../screens/HomeAuth/Checkout";
import ConfirmOrder from "../screens/HomeAuth/ConfirmOrder";
import ThankyouPage from "../screens/HomeAuth/ThankyouPage";
const Stack = createNativeStackNavigator();

export const HomeStack = (props) => (
	<Stack.Navigator
		initialRouteName="Home"
		screenOptions={{
			animation: "none",
			headerShown: false,
		}}
	>
		<Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
        <Stack.Screen name="ThankyouPage" component={ThankyouPage} />
	</Stack.Navigator>
);

