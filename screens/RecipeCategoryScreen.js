import React from "react";
import { CATEGORIES, RECIPES } from "../data/dummy-data";
import RecipeList from "../components/RecipeList";

const RecipeCategoryScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayedRecipes = RECIPES.filter(
    recipe => recipe.categoryIds.indexOf(catId) >= 0
  );
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

export default RecipeCategoryScreen;
