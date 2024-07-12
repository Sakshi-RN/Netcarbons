import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/HomeAuth/MyProfile";
import EditProfile from "../screens/HomeAuth/EditProfile";
import MyDashboard from "../screens/HomeAuth/MyDashboard";
import MyOrders from "../screens/HomeAuth/MyOrders";
import OrderDetails from "../screens/HomeAuth/OrderDetails";
import Setting from "../screens/HomeAuth/Setting";
import TermsConditions from "../screens/HomeAuth/TermsConidtions";
import ChangePassword from "../screens/HomeAuth/ChangePassword";
import ChangeAddress from "../screens/HomeAuth/ChangeAddress";
import ChangeEmail from "../screens/HomeAuth/ChangeEmail";
import VerifyOTP from '../screens/Auth/VerifyOTP'

const Stack = createNativeStackNavigator();

export const ProfileStack = (props) => (
	<Stack.Navigator
		initialRouteName="MyProfile"
		screenOptions={{
			animation: "none",
			headerShown: false,
		}}
	>
		<Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="MyDashboard" component={MyDashboard} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
		<Stack.Screen name="ChangeEmail" component={ChangeEmail} />
		<Stack.Screen name="VerifyOTP" component={VerifyOTP} />
	</Stack.Navigator>
);

