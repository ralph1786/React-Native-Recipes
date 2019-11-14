import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import RecipeCategoryScreen from "../screens/RecipeCategoryScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoriteRecipesScreen from "../screens/FavoriteRecipesScreen";
import { FontAwesome } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "ios" ? "transparent" : "dodgerblue"
    },
    headerTintColor: Platform.OS === "ios" ? "dodgerblue" : "white"
  }
};

//createStackNavigator returns a component.
const RecipeNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    RecipeCategory: {
      screen: RecipeCategoryScreen
    },
    RecipeDetails: RecipeDetailsScreen
  },
  defaultNavOptions
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoriteRecipesScreen
    },
    RecipeDetails: {
      screen: RecipeDetailsScreen
    }
  },
  defaultNavOptions
);

const navigationTabConfig = {
  Recipes: {
    screen: RecipeNavigator, //this code makes use of a stack
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome name="book" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "#f5f5f5"
    }
  },
  Favorites: {
    screen: FavoriteNavigator, //this code makes use of a stack
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <FontAwesome name="star-o" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "#f5f5f5"
    }
  }
};

const RecipeTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(navigationTabConfig, {
        activeColor: "darkorange",
        inactiveColor: "#fcbc72",
        shifting: true
      })
    : createBottomTabNavigator(navigationTabConfig, {
        tabBarOptions: {
          activeTintColor: "darkorange"
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen
    }
  },
  defaultNavOptions
);

const MainNavigator = createDrawerNavigator(
  {
    FavoriteRecipes: {
      screen: RecipeTabNavigator,
      navigationOptions: {
        drawerLabel: "Recipes"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: "darkorange"
    }
  }
);

export default createAppContainer(MainNavigator);
