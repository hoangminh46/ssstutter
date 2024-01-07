const initValue = {
  products: [],
  showSearchInput: false,
  showMenuMobile: false,
  toggleCart: false,
  // state cho Cart
  productCart: [],
  quantityCart: 0,
  totalPriceCart: 0,
};

const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'loadProducts':
      return {
        ...state,
        products: [...action.payload],
      };
    case 'showSearchInput':
      return {
        ...state,
        showSearchInput: action.payload,
      };
    case 'showMenuMobile':
      return {
        ...state,
        showMenuMobile: action.payload,
      };
    case 'toggleCart':
      return {
        ...state,
        toggleCart: action.payload,
      };
    case 'addProductCart':
      return {
        ...state,
        productCart: [...state.productCart, action.payload],
      };
    case 'increaseQuantityCart':
      return {
        ...state,
        quantityCart: state.quantityCart + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
