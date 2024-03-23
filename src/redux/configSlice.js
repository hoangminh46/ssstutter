import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initValue = {
  showSearchInput: false,
  showMenuMobile: false,
  cityData: [],
};

export const fetchCity = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
  return response.data;
});

const configSlice = createSlice({
  name: 'config',
  initialState: initValue,
  reducers: {
    showSearchInput: (state, action) => void (state.showSearchInput = action.payload),
    showMenuMobile: (state, action) => void (state.showMenuMobile = action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { showSearchInput, showMenuMobile } = configSlice.actions;

export default configSlice.reducer;
