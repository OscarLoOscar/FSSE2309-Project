const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return action.payload;
    default:
      return state;
  }
};

// Create similar reducers for other components

export default cartReducer;
