import React, { useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
  TextInput,
  Switch,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

import { useTodos } from "../contexts/todoContext";
import SearchDropdown from "../components/SearchDropdown";

function SelectLocation({ navigation }) {
  //
  const locationInptRef = useRef();
  //
  const { addTodo } = useTodos();
  const CLIENT_ID = "D4X15J42EBGJMB2OB4ZUUBEYOL2ILFIQAGQ4AEWENTUIIVX2";
  const CLIENT_SECRET = "I3QCVOADLY2PAFYSG0T2DPIRKMW5PLFHF3OTUN2KM03OK4JZ";
  const [venues, setVenues] = useState(null);

  const [isSearching, setIsSearching] = useState();

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

  function add() {
    // TODO
  }

  function cancel() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.Header]}>
        <Button onPress={cancel} title="Cancel" />
        <TextInput
          placeholder="Enter location"
          style={styles.textInput}
          ref={locationInptRef}
          onChangeText={onSearch}
        />
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Text>Option</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
  },

  Header: {
    padding: 10,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: 10,
    borderRadius: 10,
    borderColor: "#3333",
    borderWidth: 5,
    borderStyle: "solid",
    flex: 1,
  },
  selectLocation: {
    position: "relative",
  },
  options: {
    padding: 10,
  },
  option: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#3333",
    borderBottomColor: "#3333",
  },

  button: {
    zIndex: 5,
  },
  listItem: {
    padding: 1,
    margin: 1,
  },
});
