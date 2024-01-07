export const loadProducts = (payload) => {
  return {
    type: 'loadProducts',
    payload,
  };
};

export const showSearchInput = (payload) => {
  return {
    type: 'showSearchInput',
    payload,
  };
};

export const showMenuMobile = (payload) => {
  return {
    type: 'showMenuMobile',
    payload,
  };
};

export const setToggleCart = (payload) => {
  return {
    type: 'toggleCart',
    payload,
  };
};

export const addProductCart = (payload) => {
  return {
    type: 'addProductCart',
    payload,
  };
};

export const increaseQuantityCart = (payload) => {
  return {
    type: 'increaseQuantityCart',
    payload,
  };
};
