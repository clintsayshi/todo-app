import React, { useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Switch,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useTodos } from "../contexts/todoContext";
import SearchDropdown from "../components/SearchDropdown";
//import {  } from "react-native-gesture-handler";

function CreateTodo({ navigation }) {
  //
  const [textInput, setTextInput] = useState();
  const locationInptRef = useRef();
  //
  const { addTodo } = useTodos();
  const CLIENT_ID = "D4X15J42EBGJMB2OB4ZUUBEYOL2ILFIQAGQ4AEWENTUIIVX2";
  const CLIENT_SECRET = "I3QCVOADLY2PAFYSG0T2DPIRKMW5PLFHF3OTUN2KM03OK4JZ";
  const [venues, setVenues] = useState(null);

  const [includeLocation, setIncludeLocation] = useState(true);
  const [isSearching, setIsSearching] = useState();

  function includeLocationReminder() {
    setIncludeLocation((prev) => !prev);
  }

  function onSearch(text) {
    if (text) setIsSearching(true);
    else setIsSearching(false);
  }

  function getLocation() {
    const near = locationInptRef.current.value;
    if (near.length < 6) return;
    /*     fetch(
      `https://api.foursquare.com/v2/venues/search?near=${near}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210602`
    )
      .then((res) => res.json())
      .then((data) => {
        setVenues(data.response.venues);
      })
      .catch((err) => console.log(err)); */
    console.log(near);
  }

  function goSelectLocation() {
    navigation.navigate("Select_Location");
  }

  function updateText(e) {
    console.log(e);
    setTextInput(e);
  }

  function add() {
    if (textInput === "" || !textInput) {
      console.log("enter a task");
      return;
    }
    addTodo(textInput);
    navigation.navigate("Home");
  }

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
        //ref={textInputRef}
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

      {isSearching && <SearchDropdown />}
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
