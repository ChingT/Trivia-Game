import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
    loadSingleProducts: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSingleProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { loadProducts, loadSingleProducts, clearSingleProduct } =
  productSlice.actions;
export default productSlice.reducer;
