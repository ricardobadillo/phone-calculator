import { Platform, View } from "react-native";

import { useFonts } from "expo-font";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { globalStyles } from "@/styles/global-styles";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  setBackgroundColorAsync("black");
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light"></StatusBar>
    </View>
  );
}
