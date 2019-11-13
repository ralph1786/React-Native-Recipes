import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";

const CustomHeaderButton = props => {
  const iconColor = Platform.OS === "android" ? "white" : "dodgerblue";
  return (
    <HeaderButton
      {...props}
      IconComponent={FontAwesome}
      iconSize={23}
      color={iconColor}
    />
  );
};

export default CustomHeaderButton;
