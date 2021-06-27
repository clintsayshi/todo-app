import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SearchDropdown = () => {
  const data = [
    "A place called home",
    "a place of business",
    "where can I find you",
  ];
  return (
    <View style={styles.container}>
      {React.Children.toArray(
        data.map((item) => <Text style={styles.option}>{item}</Text>)
      )}
    </View>
  );
};

export default SearchDropdown;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "65%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    //border: "1px solid whitesmoke",
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 5,

    zIndex: 10,
  },
  option: {
    //border: "1px dotted blue",
    //backgroundColor: "whitesmoke",
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
});
