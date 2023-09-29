import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLogin: boolean;
  data: {} | null;
}
const initialState: UserState = {
  isLogin: false,
  data: null,
};
const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

export default userSlice.reducer;

export const { login, logout } = userSlice.actions;
