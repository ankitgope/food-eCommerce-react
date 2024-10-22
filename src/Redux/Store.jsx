import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Redux/CartSlice";

export const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
});
