import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  productDetails: [],
  UpdatedProductList: []
};

export const productDetails = createAsyncThunk("details", async () => {
  const useData = await fetch("https://dummyjson.com/products");
  const parsedData = await useData.json();
  return parsedData.products;
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    Total: (state, action) => {
      state.cart = action.payload;
    },

    UpdatedProductList: (state, action) => {
      state.updatedCart = [...state, action.payload];
    }
  },

  extraReducers: (builder) => {
    builder.addCase(productDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  }
});

export default userSlice.reducer;
export const { Total, UpdatedProductList } = userSlice.actions;
