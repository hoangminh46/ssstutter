const initValue = {
  products: [],
  showSearchInput: false,
  showMenuMobile: false,
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
    default:
      return state;
  }
};

export default rootReducer;
