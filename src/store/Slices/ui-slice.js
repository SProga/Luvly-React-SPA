import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
    toPurchase: false,
    showConfirmationPage: false,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    resetNotification(state) {
      state.notification = null;
    },
    toPurchase(state) {
      state.toPurchase = !state.toPurchase;
    },
    closeConfirmationPage(state) {
      state.showConfirmationPage = false;
    },
    openConfirmationPage(state) {
      state.showConfirmationPage = true;
    },
    executeScroll(state, action) {
      action.payload.current.scrollIntoView({ behavior: "smooth" });
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
