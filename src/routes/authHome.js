import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Auth/Splash";
import Start from "../screens/Auth/Start";
import ChooseCountry from "../screens/Auth/ChooseCountry";
import OnboardingFirst from "../screens/Auth/OnboardingFirst";
import OnboardingSecond from "../screens/Auth/OnboardingSecond";
import OnboardingThird from "../screens/Auth/OnboardingThird";
import LetStart from "../screens/Auth/LetStart";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import FillOTP from "../screens/Auth/FillOtp";

import Calculate from "../screens/HomeAuth/Calculate";
import CalculateCarbonFootprint from "../screens/HomeAuth/CalculateCarbonFootprint";
import YouNotSigned from "../screens/HomeAuth/YouNotSigned";
import Payment from "../screens/HomeAuth/Payment";
import ProductDetail from "../screens/HomeAuth/ProductDetail";
import ChangeEmail from "../screens/HomeAuth/ChangeEmail";
import FailedScreen from "../screens/HomeAuth/Failed";
import Address from "../screens/HomeAuth/Address";
import Checkout from "../screens/HomeAuth/Checkout";
import ThankyouPage from "../screens/HomeAuth/ThankyouPage";
import ConfirmOrder from "../screens/HomeAuth/ConfirmOrder";
import Search from "../screens/HomeAuth/Search";
import Wishlist from "../screens/HomeAuth/Wishlist";
import MyDashboard from "../screens/HomeAuth/MyDashboard";
import { TabNavigation } from "./tabsNavigation";
import { HomeTab } from "./HomeTab";

const AuthPureStack = createNativeStackNavigator();

export const AuthHome = (props) => {
  return (
    <AuthPureStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        animation: "none",
        headerShown: false,
      }}
    >
      <AuthPureStack.Screen name="Splash" component={Splash} />
      <AuthPureStack.Screen name="Start" component={Start} />
      <AuthPureStack.Screen name="ChooseCountry" component={ChooseCountry} />
      <AuthPureStack.Screen name="OnboardingFirst" component={OnboardingFirst} />
      <AuthPureStack.Screen name="OnboardingSecond" component={OnboardingSecond} />
      <AuthPureStack.Screen name="OnboardingThird" component={OnboardingThird} />
      <AuthPureStack.Screen name="LetStart" component={LetStart} />
      <AuthPureStack.Screen name="Login" component={Login} />
      <AuthPureStack.Screen name="Register" component={Register} />
      <AuthPureStack.Screen name="FillOTP" component={FillOTP} />
      <AuthPureStack.Screen name="Home" component={TabNavigation} />
      <AuthPureStack.Screen name="Calculate" component={Calculate} />
      <AuthPureStack.Screen name="CalculateCarbonFootprint" component={CalculateCarbonFootprint} />
      <AuthPureStack.Screen name="YouNotSigned" component={YouNotSigned} />
      <AuthPureStack.Screen name="Payment" component={Payment} />
      <AuthPureStack.Screen name="ProductDetail" component={ProductDetail} />
      <AuthPureStack.Screen name="Checkout" component={Checkout} />
      <AuthPureStack.Screen name="ThankyouPage" component={ThankyouPage} />
      <AuthPureStack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <AuthPureStack.Screen name="Search" component={Search} />
      <AuthPureStack.Screen name="ChangeEmail" component={ChangeEmail} />
      <AuthPureStack.Screen name="FailedScreen" component={FailedScreen} />
      <AuthPureStack.Screen name="Address" component={Address} />
      <AuthPureStack.Screen name="Wishlist" component={Wishlist} />
      <AuthPureStack.Screen name="HomeTab" component={HomeTab} />
      <AuthPureStack.Screen name="MyDashboard" component={MyDashboard} />
    </AuthPureStack.Navigator>
  );
};
export default AuthHome;
