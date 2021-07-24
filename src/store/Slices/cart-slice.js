import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    showModal: false,
    cartTotal: 0,
    itemRemoved: false,
    shippingTax: 0.1,
    tax: 0.1,
    cartTax: 0,
    shippingFee: 0,
    orderTotal: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.changed = false;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          src: newItem.src,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          isLoading: false,
        });
      } else {
        existingItem.quantity = newItem.quantity || existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      state.totalQuantity = 0;
      state.cartTotal = 0;
      state.items.forEach((item) => {
        state.totalQuantity += item.quantity;
      });
      state.items.forEach((item) => {
        state.cartTotal += item.totalPrice;
      });
      state.changed = true;
    },
    removeItemFromCart(state, action) {
      state.changed = false;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== existingItem.id);
      state.totalQuantity = 0;
      state.cartTotal = 0;
      state.items.forEach((item) => {
        state.totalQuantity += item.quantity;
      });
      state.items.forEach((item) => {
        state.cartTotal += item.totalPrice;
      });
      state.itemRemoved = true;
      state.changed = true;
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
      state.itemRemoved = false;
      state.changed = false;
    },
    orderTotal(state) {
      state.cartTax = state.tax * state.cartTotal;
      state.shippingFee = state.shippingTax * state.cartTotal;
      state.orderTotal = state.cartTax + state.shippingFee + state.cartTotal;
    },
    resetCart(state) {
      state.items = [];
      state.cartTotal = 0;
      state.totalQuantity = 0;
      state.showModal = false;
      state.itemRemoved = true;
      state.changed = false;
      state.shippingFee = 0;
      state.cartTax = 0;
      state.orderTotal = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
