import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import RecipeCategoryScreen from "../screens/RecipeCategoryScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { Platform } from "react-native";

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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "transparent" : "dodgerblue"
      },
      headerTintColor: Platform.OS === "ios" ? "dodgerblue" : "white"
    }
  }
);

export default createAppContainer(RecipeNavigator);
