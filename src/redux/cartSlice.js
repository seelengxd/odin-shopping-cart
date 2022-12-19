import { createSlice } from "@reduxjs/toolkit";
import redShirt from "../assets/red.png";
import yellowShirt from "../assets/yellow.png";
import greenShirt from "../assets/green.png";

const initialState = {
  showSidebar: false,
  cart: [
    {
      id: 1,
      name: "red shirt",
      price: 1.0,
      quantity: 0,
      src: redShirt,
    },
    {
      id: 2,
      name: "yellow shirt",
      price: 2.0,
      quantity: 0,
      src: yellowShirt,
    },
    {
      id: 3,
      name: "green shirt",
      price: 3.0,
      quantity: 0,
      src: greenShirt,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    modify: (state, action) => {
      const { id, change } = action.payload;
      state.cart.filter((item) => item.id === id)[0].quantity += change;
    },
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { modify, toggleSidebar } = cartSlice.actions;

export default cartSlice.reducer;
