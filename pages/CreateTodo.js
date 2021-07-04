import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useTodos } from "../contexts/todoContext";

function CreateTodo({ navigation }) {
  // store the text when creating a new todo
  const [textInput, setTextInput] = useState();
  //flag for when or when not to include location
  const [includeLocation, setIncludeLocation] = useState(false);
  // todo context value
  const { addTodo } = useTodos();

  function includeLocationReminder() {
    setIncludeLocation((prev) => !prev);
  }
  // navigate to select location screen
  function goSelectLocation() {
    navigation.navigate("Select_Location");
  }
  // update state text when typing a todo
  function updateText(e) {
    console.log(e);
    setTextInput(e);
  }
  // add a todo
  function add() {
    if (textInput === "" || !textInput) {
      console.log("enter a task");
      return;
    }
    addTodo(textInput);
    navigation.navigate("Home");
  }
  // cancel creation of a new todo
  function cancel() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={[styles.Header, styles.flexRow]}>
        <Pressable style={styles.btn} onPress={cancel}>
          <Text style={styles.btnText}>Cancel</Text>
        </Pressable>
        <Text style={styles.heading}>Create a todo</Text>
        <Pressable onPress={add} style={styles.btn}>
          <Text style={styles.btnText}>Done</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Enter a todo"
        onChangeText={updateText}
      />

      <View style={[styles.flexRow, styles.locationSelect]}>
        <Text>Include Location Reminder</Text>
        <Switch
          value={includeLocation}
          onValueChange={includeLocationReminder}
        />
      </View>

      {includeLocation && (
        <TouchableOpacity
          style={[styles.locationBtn, styles.flexRow]}
          title="Search Location"
          onPress={goSelectLocation}
        >
          <Text style={styles.locationBtnText}>Select Location</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default CreateTodo;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Header: {
    paddingVertical: 10,
  },
  textInput: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  locationSelect: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  locationBtn: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#3333",
    borderBottomColor: "#3333",
    padding: 10,
    //paddingHorizontal: 20,
  },
  locationBtnText: {
    //color: "#333",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "dodgerblue",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    zIndex: 5,
  },
  listItem: {
    padding: 1,
    margin: 1,
  },
});
