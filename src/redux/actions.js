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
