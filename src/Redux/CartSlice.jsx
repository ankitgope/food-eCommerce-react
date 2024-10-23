import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
// cart slice  making slice
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // add to cart
    // state -> current value in the cart
    // action -> is the the data the user passes in
    addToCart: (state, action) => {
      console.log("action", action);
      // setting the vale to cart and using spread operator to get the privious value if anything
      state.items = [...state.items, action.payload];
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
