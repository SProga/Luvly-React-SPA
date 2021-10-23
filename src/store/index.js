import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cart-slice";
import loginSlice from "./Slices/login-slice";
import uiSlice from "./Slices/ui-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});
export default store;
