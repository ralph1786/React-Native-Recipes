import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";

const CategoriesScreen = props => {
  //   console.log(props);
  const renderGridItem = itemData => {
    return (
      <CategoryTile
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "RecipeCategory",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

CategoriesScreen.navigationOptions = {
  headerTitle: "Recipe Categories"
};

export default CategoriesScreen;
