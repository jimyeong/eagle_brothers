import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "Home/features/todo/TodoSlice";
import UserReducer from "Home/features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    todos: TodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
