import React, { useEffect, useState } from "react";
import { styled } from "nativewind";
import { ImageBackground } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

// Component created from a svg file
import Stripes from "../src/assets/stripes.svg";
import blurBg from "../src/assets/bg-blur.png";

const StyledStripes = styled(Stripes);

const Layout = () => {
  // function that recreates the components that has the variable that has been changed
  // and always returns an array with 2 values, the 1st is the variable value and the 2nd is a function to set the variable value
  const [isUserAuthenticated, setUserAuthenticate] = useState<null | boolean>(
    null
  );

  const [hasLoadedFonts] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    BaiJamjuree_700Bold,
  });

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setUserAuthenticate(!!token);
    });
  }, []);

  if (!hasLoadedFonts) {
    return <SplashScreen />;
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStripes className="absolute left-2" />
      <StatusBar style="light" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  );
};

export default Layout;
