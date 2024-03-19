import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const baseURL = process.env.REACT_APP_BASE_URL;

const initValue = {
  showSearchInput: false,
  showMenuMobile: false,
};

// export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
//   const response = await axios.get(`${baseURL}/api/products`);
//   return response.data;
// });

const configSlice = createSlice({
  name: 'config',
  initialState: initValue,
  reducers: {
    showSearchInput: (state, action) => void (state.showSearchInput = action.payload),
    showMenuMobile: (state, action) => void (state.showMenuMobile = action.payload),
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchProducts.fulfilled, (state, action) => {
  //       return action.payload;
  //     });
  //   },
});

export const { showSearchInput, showMenuMobile } = configSlice.actions;

export default configSlice.reducer;
