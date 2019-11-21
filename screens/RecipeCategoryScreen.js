import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import RecipeList from "../components/RecipeList";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const RecipeCategoryScreen = props => {
  const listOfFilteredRecipes = useSelector(
    state => state.recipes.filteredRecipes
  );

  const catId = props.navigation.getParam("categoryId");

  const displayedRecipes = listOfFilteredRecipes.filter(
    recipe => recipe.categoryIds.indexOf(catId) >= 0
  );

  if (displayedRecipes.length === 0) {
    return (
      <View style={styles.message}>
        <Text style={styles.text}>
          No recipes found. Please check your filters!
        </Text>
      </View>
    );
  }

  return (
    <RecipeList listData={displayedRecipes} navigation={props.navigation} />
  );
};

//Use function for dynamic values.
RecipeCategoryScreen.navigationOptions = navigationData => {
  //   console.log(navigationData);
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(category => category.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  message: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18
  }
});

export default RecipeCategoryScreen;
