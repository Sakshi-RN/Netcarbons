import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthLogin from "./authLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthHome from "./authHome";

 

export default function Navigation() {
  const [regUser, setRegUser] = useState(true);
  const login_type = AsyncStorage.getItem("loginUser").then((value) => {
    console.log("login user", value);
    setRegUser(JSON.parse(value));
  });
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {regUser !== 0 ? <AuthLogin /> : <AuthHome />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
