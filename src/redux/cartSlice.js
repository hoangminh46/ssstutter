import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const baseURL = process.env.REACT_APP_BASE_URL;

const initValue = {
  toggleCart: false,
  productCart: [],
  totalPriceCart: 0,
};

// export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
//   const response = await axios.get(`${baseURL}/api/products`);
//   return response.data;
// });

const cartSlice = createSlice({
  name: 'cart',
  initialState: initValue,
  reducers: {
    setToggleCart: (state, action) => void (state.toggleCart = action.payload),
    addProductCart: (state, action) => {
      const existingProduct = state.productCart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        state.productCart.map((product) => {
          if (product.id === action.payload.id) {
            product.countProduct += action.payload.countProduct;
            product.totalPrice = product.countProduct * product.salePrice;
          }
        });
      } else {
        state.productCart.push(action.payload);
      }
      // state.productCart.push(action.payload);
      // state.productCart.map((product) => {
      //   if (product.id === action.payload.id) {
      //     console.log('true');
      //   } else {
      //     console.log('false');
      //   }
      // });
    },
    //Xoá 1 sản phẩm trong giỏ hàng và giảm 1 số lượng giỏ hàng
    deleteProductCart: (state, action) => {
      let newProductCart = state.productCart.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.productCart = newProductCart;
    },
    // Tăng số lượng cho một sản phẩm nhất định và tính lại tổng tiền của sản phẩm đó
    increaseQuantityInput: (state, action) => {
      let increaseInput = state.productCart.find((product) => {
        return product.id === action.payload.id;
      });
      if (increaseInput.countProduct >= 1 && increaseInput.countProduct < 99) {
        increaseInput.countProduct += 1;
        increaseInput.totalPrice = increaseInput.countProduct * increaseInput.salePrice;
      }
    },
    // Giảm số lượng cho một sản phẩm nhất định và tính lại tổng tiền của sản phẩm đó
    decreaseQuantityInput: (state, action) => {
      let decreaseInput = state.productCart.find((product) => {
        return product.id === action.payload.id;
      });
      if (decreaseInput.countProduct > 1 && decreaseInput.countProduct <= 99) {
        decreaseInput.countProduct -= 1;
        decreaseInput.totalPrice = decreaseInput.countProduct * decreaseInput.salePrice;
      }
    },
    updateTotalPriceCart: (state, action) => {
      let totalPrice = state.productCart.reduce((acc, product) => {
        return acc + product.salePrice * product.countProduct;
      }, 0);
      state.totalPriceCart = totalPrice;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchProducts.fulfilled, (state, action) => {
  //       return action.payload;
  //     });
  //   },
});

export const {
  setToggleCart,
  addProductCart,
  deleteProductCart,
  increaseQuantityInput,
  decreaseQuantityInput,
  updateTotalPriceCart,
} = cartSlice.actions;
export default cartSlice.reducer;
