import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
};

export const productSlice = createSlice({
  name: "productList",
  initialState,

  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload; 
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload);
    }     
  }
});

export const { setProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
