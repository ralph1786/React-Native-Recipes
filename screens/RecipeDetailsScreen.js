import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/recipeActions";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const RecipeDetailsScreen = props => {
  const availableRecipes = useSelector(state => state.recipes.recipes);
  const recipeObj = props.navigation.getParam("chosenRecipeObj");
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(recipeObj));
  }, [dispatch, recipeObj]);

  useEffect(() => {
    //Use setParams to use a function on the navigation.
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    });
  }, [toggleFavoriteHandler]);

  const chosenRecipeObj = availableRecipes.find(
    recipe => recipe.id === recipeObj.id
  );
  // console.log(recipeObj);
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: chosenRecipeObj.imageUrl }} />
      <View style={styles.details}>
        <Text>{chosenRecipeObj.duration}</Text>
        <Text>{chosenRecipeObj.complexity.toUpperCase()}</Text>
        <Text>{chosenRecipeObj.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {chosenRecipeObj.ingredients.map((ing, index) => (
        <ListItem key={index}>{ing}</ListItem>
      ))}
      <Text style={styles.title}>Instructions</Text>
      {chosenRecipeObj.instructions.map((instruction, index) => (
        <ListItem key={index}>{instruction}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-evenly"
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

RecipeDetailsScreen.navigationOptions = navigationData => {
  const recipeObj = navigationData.navigation.getParam("chosenRecipeObj");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: recipeObj.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="star-o" onPress={toggleFavorite} />
      </HeaderButtons>
    )
  };
};

export default RecipeDetailsScreen;
