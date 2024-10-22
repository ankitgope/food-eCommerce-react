import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
// cart slice  making slice
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      console.log("action", action)
      // setting the vale to cart and using spread operator to get the privious value if anything 
      state.cart=[...state.cart,action.payload]
    }
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
