import React from "react";
import RecipeNavigator from "./navigation/RecipesNavigator";
import store from "./store/storeConfig";
import { Provider } from "react-redux";
// import { enableScreens } from "react-native-screens";

//Function below uses native screens for better performance.
// enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <RecipeNavigator />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
