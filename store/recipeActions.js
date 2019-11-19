export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = recipeObj => {
  return {
    type: TOGGLE_FAVORITE,
    payload: recipeObj
  };
};

export const setFilters = filterSettings => {
  return {
    type: SET_FILTERS,
    payload: filterSettings
  };
};
