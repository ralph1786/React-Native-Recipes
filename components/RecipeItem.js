import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
} from "react-native";

const RecipeItem = ({ selectedRecipe, recipeData }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.recipeItem}>
      <TouchableComponent onPress={selectedRecipe}>
        <View>
          <View style={{ ...styles.recipeRow, ...styles.recipeHeader }}>
            <ImageBackground
              source={{ uri: recipeData.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{recipeData.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.recipeRow, ...styles.recipeDetails }}>
            <Text>{recipeData.duration}</Text>
            <Text>{recipeData.complexity.toUpperCase()}</Text>
            <Text>{recipeData.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeRow: {
    flexDirection: "row"
  },
  recipeItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden"
  },
  recipeHeader: {
    height: "85%"
  },
  recipeDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});

export default RecipeItem;
