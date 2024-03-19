import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import productReducer from './productSlice';
import configReducer from './configSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  config: configReducer,
});

export default rootReducer;
