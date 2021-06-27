import React from "react";
import { useContext, useState } from "react";

const TodosContext = React.createContext();

export function useTodos() {
  return useContext(TodosContext);
}

export default function TodosProvider({ children }) {
  // initialize a state variable that holds the todos in an array
  const [todos, setTodos] = useState([
    {
      id: "newnwnwn",
      text: "cry me cry me",
      where: { latitude: 26.6553, altitude: 24.54344 },
      status: false,
    },
  ]);
  // add a todo
  function addTodo(text, where = { latitude: 26.6553, altitude: 24.54344 }) {
    if (text === "") return;
    const todo = {
      id: text + "newnwnwn",
      text: text,
      where: where,
      status: false,
    };

    setTodos((prev) => [...prev, todo]);
  }

  // change a todo status to opposite of the current
  function toggleTodo(id) {
    setTodos((prev) => {
      const temp = prev.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          status: !todo.status,
        };
      });
      return temp;
    });
  }
  // delete the todo
  function removeTodo(id) {
    setTodos((prev) => {
      const newtodos = prev.filter((x) => x.id !== id);
      return newtodos;
    });
  }
  // all the values of the context needed throughout todo lifecycle
  const value = {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
