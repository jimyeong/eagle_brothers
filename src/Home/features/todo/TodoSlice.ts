import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";
import { useSelector } from "react-redux";

interface TodoState {
  todos: [];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTask: () => {},
    removeTask: () => {},
    editTask: () => {},
    deleteTask: () => {},
  },
});

export const { addTask, removeTask, editTask, deleteTask } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos;
export default todoSlice.reducer;
