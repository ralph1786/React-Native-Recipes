import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, RECIPES } from "../data/dummy-data";
import RecipeItem from "../components/RecipeItem";

const RecipeCategoryScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const renderRecipeItem = itemData => {
    return (
      <RecipeItem
        recipeData={itemData.item}
        selectedRecipe={() => {
          props.navigation.navigate({
            routeName: "RecipeDetails",
            params: {
              chosenRecipeObj: itemData.item
            }
          });
        }}
      />
    );
  };

  const displayedRecipes = RECIPES.filter(
    recipe => recipe.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedRecipes}
        keyExtractor={item => item.id}
        renderItem={renderRecipeItem}
        style={{ width: "100%" }}
      />
    </View>
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default RecipeCategoryScreen;
