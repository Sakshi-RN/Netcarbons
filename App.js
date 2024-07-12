import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/routes/navigation";
import store from "./src/redux/storeConfig";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded, fontError] = useFonts({
    "WorkSans-Medium": require("./src/assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("./src/assets/fonts/WorkSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <Navigation />
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
