import React, { useCallback } from "react";
import { View, StyleSheet, LogBox } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/routes/navigation";
import store from "./src/redux/storeConfig";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StripeProvider } from '@stripe/stripe-react-native';

SplashScreen.preventAutoHideAsync();
function App() {
  LogBox.ignoreLogs([ 'Warning: ...' ]);
  LogBox.ignoreAllLogs();
  const [ fontsLoaded, fontError ] = useFonts({
    "WorkSans-Medium": require("./src/assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("./src/assets/fonts/WorkSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError)
    {
      await SplashScreen.hideAsync();
    }
  }, [ fontsLoaded, fontError ]);

  if (!fontsLoaded && !fontError)
  {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <StripeProvider publishableKey="pk_test_51PYC9fRxMdVFM3P7UHM0DtaMc0hr5o2vBLVSP1QpXUw03UuuvD6l7FmJTzHC70epXb5Bw6tBc904SeWfRsIofeWH00jJl1RYPM">
          <Navigation />
        </StripeProvider>
      </Provider>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
