import React from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

const FilterSwitch = ({ label, state, onChangeHandler }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: "darkorange" }}
        value={state}
        onValueChange={onChangeHandler}
        thumbColor={Platform.OS === "android" ? "#f5f5f5" : ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
});

export default FilterSwitch;
