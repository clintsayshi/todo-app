import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import TodosProvider from "./contexts/todoContext";

import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";
import SelectLocation from "./pages/SelectLocation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TodosProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="todo"
              component={CreateTodo}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Select_Location"
              component={SelectLocation}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TodosProvider>
  );
}
