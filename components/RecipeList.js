import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ listData, navigation }) => {
  const renderRecipeItem = itemData => {
    return (
      <RecipeItem
        recipeData={itemData.item}
        selectedRecipe={() => {
          navigation.navigate({
            routeName: "RecipeDetails",
            params: {
              chosenRecipeObj: itemData.item
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={item => item.id}
        renderItem={renderRecipeItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default RecipeList;
