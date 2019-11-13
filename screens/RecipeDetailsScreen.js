import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const RecipeDetailsScreen = props => {
  const recipeObj = props.navigation.getParam("chosenRecipeObj");
  console.log(recipeObj);
  return (
    <View style={styles.screen}>
      <Text>Recipe Details Screen</Text>
      <Button
        title="Back To Categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

RecipeDetailsScreen.navigationOptions = navigationData => {
  const recipeObj = navigationData.navigation.getParam("recipeObj");
  return {
    headerTitle: recipeObj.title
  };
};

export default RecipeDetailsScreen;
