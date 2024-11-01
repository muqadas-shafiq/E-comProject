import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.products = action.payload; 
    },
    removeUser: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload);
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
