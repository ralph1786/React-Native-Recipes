import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: "darkorange" }}
        value={props.state}
        onValueChange={props.onChangeHandler}
        thumbColor={Platform.OS === "android" ? "#f5f5f5" : ""}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChangeHandler={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChangeHandler={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChangeHandler={newValue => setIsVegetarian(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChangeHandler={newValue => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Recipes",
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

export default FiltersScreen;
