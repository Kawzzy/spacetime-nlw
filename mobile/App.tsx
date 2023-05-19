import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text } from "react-native";

import blurBg from "./src/assets/bg-blur.png";
// Component created from a svg file
import Stripes from "./src/assets/stripes.svg";
import { styled } from "nativewind";

const StyledStripes = styled(Stripes);

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStripes className="absolute left-2" />

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
