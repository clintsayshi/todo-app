import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useTodos } from "../contexts/todoContext";
import Card from "../components/card";

function Home({ navigation }) {
  const { todos, toggleTodo, removeTodo } = useTodos();
  const searchInputRef = useRef();

  let completed = todos.filter((x) => x.status !== false).length;

  function goAdd() {
    navigation.navigate("todo");
  }

  return (
    <View style={[styles.container, styles.fill]}>
      {/* Top Header of the home screen of the app */}
      <View style={[styles.mainHeader, styles.flexRow]}>
        {/* Search input for todos */}
        <TextInput
          ref={searchInputRef}
          style={styles.searchInput}
          placeholder="Search"
        />
        {/* Add button that takes us to the create todo screen */}
        <Pressable style={styles.addBtn} onPress={goAdd}>
          <Ionicons name="add" size={30} color="black" />
        </Pressable>
      </View>
      {/* A container for the todos (Heading and List of todos in a scrollview) */}
      <View style={[styles.todosContainer, styles.fill]}>
        <View style={[styles.Header, styles.flexRow]}>
          <Text style={styles.todosHeader}>Todos</Text>
          <Text>All ({todos.length})</Text>
        </View>

        {todos && (
          <ScrollView style={[styles.todosList, styles.fill]}>
            {React.Children.toArray(
              todos.map((todo) => {
                return (
                  <Card
                    todo={todo}
                    onDelete={() => removeTodo(todo.id)}
                    onToggle={() => toggleTodo(todo.id)}
                  />
                );
              })
            )}
          </ScrollView>
        )}
      </View>
      {completed > 0 && (
        /* Number of completed todos only displayed when there are completed todos */
        <View style={[styles.footer, styles.flexRow]}>
          <Text>Completed</Text>
          <Text style={styles.footerText}>
            {todos.filter((x) => x.status !== false).length}
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#3333",
  },
  fill: {
    flex: 1,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainHeader: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  Header: {
    paddingVertical: 10,
  },
  todosContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "#fff",
    padding: 10,
    paddingBottom: 0,
  },
  searchInput: {
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 6,
    flex: 1,
    borderColor: "transparent",
    borderWidth: 2,
  },
  addBtn: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderColor: "transparent",
    borderWidth: 2,
    backgroundColor: "white",
  },
  todosHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  todosList: {
    paddingTop: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footerText: {
    fontWeight: "bold",
  },
});
