import React from "react";
import RecipeList from "../components/RecipeList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from "react-native";

const FavoriteRecipesScreen = props => {
  const favRecipes = useSelector(state => state.recipes.favoriteRecipes);

  if (favRecipes.length === 0) {
    return (
      <View style={styles.message}>
        <Text style={styles.text}>
          No favorite recipes found. Please add some!
        </Text>
      </View>
    );
  }

  return <RecipeList listData={favRecipes} navigation={props.navigation} />;
};

FavoriteRecipesScreen.navigationOptions = navData => {
  return {
    headerTitle: "My Favorites!",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
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

export default FavoriteRecipesScreen;
