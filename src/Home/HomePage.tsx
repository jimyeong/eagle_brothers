import React, { useContext, createContext, useReducer } from "react";

import { Link } from "react-router-dom";
import App from "../App";
import { useGlobalAppContext } from "../contexts/GlobalAppContext";
import useTextInput from "hooks/useTextInput";
import AddItem from "Home/ui/AddItem";
import TodoList from "Home/ui/TodoList";

import ExperienceCard from "Home/ui/Cards/ExperienceCard";
import RenderList from "components/Lists/RenderList";
import styled from "styled-components";

const UIHomepageBlock = styled.div`
  .card__list {
    margin-left: -8px;
  }
`;

export type State = {
  todos: TodoItem[];
};
export type TodoItem = { title: string; done: boolean; active: boolean };
export type Action = { type: "TODO_ADD"; payload: TodoItem };
interface IHomePageContext {
  todos: TodoItem[];
  addTodoItem: ({}: TodoItem) => void;
}
const homeContext = createContext<IHomePageContext>({} as IHomePageContext);

const useHomeContext = () => {
  const context = useContext(homeContext);
  if (!context) {
    throw new Error("homeContext should be used within homeContextProvider");
  }
  return context;
};

export { homeContext, useHomeContext };

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
  const { todos } = pageState;
  const context = useGlobalAppContext();
  const addTodoItem = (item: TodoItem) => {
    homeDispatch({ type: "TODO_ADD", payload: item });
  };
  const updateContext = () => {};

  return (
    <UIHomepageBlock>
      <homeContext.Provider value={{ ...pageState, addTodoItem }}>
        <h1 className="text-3xl font-bold">English Practise</h1>
        <AddItem />
        <TodoList todos={todos} />
      </homeContext.Provider>
    </UIHomepageBlock>
  );
};

export default HomePage;
