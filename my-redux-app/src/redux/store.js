import { configureStore } from "@reduxjs/toolkit";
import deliveryReducer from "./deliverySlice";

export const store = configureStore({
  reducer: {
    delivery: deliveryReducer,
  },
});