import React from "react";
import RecipeList from "../components/RecipeList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavoriteRecipesScreen = props => {
  return <RecipeList navigation={props.navigation} />;
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

export default FavoriteRecipesScreen;
