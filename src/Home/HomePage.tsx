import React, { useContext, createContext, useReducer } from "react";

import { Link } from "react-router-dom";
import App from "../App";
import { useGlobalAppContext } from "../contexts/GlobalAppContext";
import useTextInput from "hooks/useTextInput";
import AddItem from "./ui/AddItem";

type State = {
  todos: TodoItem[];
};
type TodoItem = { title: string; done: boolean; active: boolean };
type Action = { type: "TODO_ADD"; payload: TodoItem };
interface IHomePageContext {
  todos: TodoItem[];
  addTodoItem: ({}: TodoItem) => void;
}
const homeContext = createContext<IHomePageContext>({} as IHomePageContext);

export const useHomeContext = () => {
  const context = useContext(homeContext);
  if (!context) {
    throw new Error("homeContext should be used within homeContextProvider");
  }
  return context;
};

const initialState: State = {
  todos: [] as TodoItem[],
};

const homeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TODO_ADD": {
      return {
        ...state,
        todos: state.todos.concat({
          title: action.payload.title,
          done: action.payload.done,
          active: action.payload.active,
        }),
      };
    }
    default:
      return state;
  }
};

const HomePage = () => {
  const [pageState, homeDispatch] = useReducer(homeReducer, initialState);
  const context = useGlobalAppContext();
  const addTodoItem = (item: TodoItem) => {
    homeDispatch({ type: "TODO_ADD", payload: item });
  };
  const updateContext = () => {};

  return (
    <React.Fragment>
      <homeContext.Provider value={{ ...pageState, addTodoItem }}>
        <h1 className="text-3xl font-bold">Todos</h1>
        <AddItem />
      </homeContext.Provider>
    </React.Fragment>
  );
};

export default HomePage;
