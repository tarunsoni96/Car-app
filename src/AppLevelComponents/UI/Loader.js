import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Colors } from "UIProps/Colors";
import LottieHOC from "./LottieHOC";
const Loader = ({ size, color, style, showLottie = false }) => {
  return (
    <>
      {showLottie ? (
        <LottieHOC />
      ) : (
        <ActivityIndicator
          style={style}
          size={size || "large"}
          color={color || Colors.accent}
        />
      )}
    </>
  );
};

export default Loader;
