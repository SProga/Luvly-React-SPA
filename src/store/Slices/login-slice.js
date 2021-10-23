import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "ui",
  initialState: {
    isLoginVisible: false,
    showModal: false,
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    toggle(state) {
      state.isLoginVisible = !state.isLoginVisible;
      state.showModal = !state.showModal;
    },
    logIn(state, action) {
      state.isLoggedIn = true;
      const username = action.payload.username;
      const password = action.payload.password;
      const user = { username, password };
      state.user = user;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});
export const loginActions = loginSlice.actions;
export default loginSlice;
