import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from '../screens/Auth/Splash';
import Start from '../screens/Auth/Start';
import ChooseCountry from '../screens/Auth/ChooseCountry';
import OnboardingFirst from '../screens/Auth/OnboardingFirst';
import OnboardingSecond from '../screens/Auth/OnboardingSecond';
import OnboardingThird from '../screens/Auth/OnboardingThird';
import LetStart from '../screens/Auth/LetStart';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import FillOTP from '../screens/Auth/FillOtp';
import ThanksRegister from '../screens/Auth/ThanksRegister';
import LetsGo from '../screens/Auth/LetsGo';
import WelcomeUser from '../screens/HomeAuth/WelcomeUser';
import { TabNavigation } from './tabsNavigation';
import { HomeTab } from './HomeTab';
const AuthStack = createNativeStackNavigator();

export const AuthLogin = (props) => {
  return(
    <AuthStack.Navigator 
      initialRouteName="Splash"
      screenOptions={{
        animation: "none",
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Splash" component={Splash}/>
      <AuthStack.Screen name="Start" component={Start}/>
      <AuthStack.Screen name="ChooseCountry" component={ChooseCountry}/>
      <AuthStack.Screen name="OnboardingFirst" component={OnboardingFirst}/>
      <AuthStack.Screen name="OnboardingSecond" component={OnboardingSecond}/>
      <AuthStack.Screen name="OnboardingThird" component={OnboardingThird}/>
      <AuthStack.Screen name="LetStart" component={LetStart}/>
      <AuthStack.Screen name="Login" component={Login}/>
      <AuthStack.Screen name="Register" component={Register}/>
      <AuthStack.Screen name="FillOTP" component={FillOTP}/>
      <AuthStack.Screen name="ThanksRegister" component={ThanksRegister}/>
      <AuthStack.Screen name="LetsGo" component={LetsGo}/>
      <AuthStack.Screen name="WelcomeUser" component={WelcomeUser}/>
      <AuthStack.Screen name="Home" component={TabNavigation}/>
      <AuthStack.Screen name=" HomeTab" component={ HomeTab}/>
    </AuthStack.Navigator>
  );
}
export default AuthLogin
