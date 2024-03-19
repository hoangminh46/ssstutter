import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api-shop-d68u.onrender.com';

const initValue = {
  products: [],
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(`${baseURL}/api/products`);
  return response.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: initValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
