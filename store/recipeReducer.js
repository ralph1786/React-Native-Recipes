import { RECIPES } from "../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "./recipeActions";

const initialState = {
  recipes: RECIPES,
  filteredRecipes: RECIPES,
  favoriteRecipes: []
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteRecipes.findIndex(
        recipe => recipe.id === action.payload.id
      );
      if (existingIndex >= 0) {
        return {
          ...state,
          //   favoriteRecipes: [...state.favoriteRecipes.splice(existingIndex, 1)]
          favoriteRecipes: [
            ...state.favoriteRecipes.filter(
              recipe => recipe.id !== action.payload.id
            )
          ]
        };
      } else {
        return {
          ...state,
          favoriteRecipes: [...state.favoriteRecipes, action.payload]
        };
      }

    case SET_FILTERS:
      const listOfFilteredRecipes = state.recipes.filter(recipe => {
        if (action.payload.glutenFree && !recipe.isGlutenFree) {
          return false;
        }
        if (action.payload.lactoseFree && !recipe.isLactoseFree) {
          return false;
        }
        if (action.payload.vegetarian && !recipe.isVegetarian) {
          return false;
        }
        if (action.payload.vegan && !recipe.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredRecipes: listOfFilteredRecipes
      };

    default:
      return state;
  }
};

export default recipeReducer;
