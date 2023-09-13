import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
