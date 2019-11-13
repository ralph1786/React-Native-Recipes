import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipeNavigator from "./navigation/RecipesNavigator";
// import { enableScreens } from "react-native-screens";

//Function below uses native screens for better performance.
// enableScreens();

export default function App() {
  return <RecipeNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
