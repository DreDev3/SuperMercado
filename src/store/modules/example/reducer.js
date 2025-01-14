import * as types from '../types';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const cart = state.cart || [];

  switch (action.type) {
    case types.CART_ADD: {
      const existingProductIndex = cart.findIndex(item => item.id === action.payload.id);

      if (existingProductIndex >= 0) {
        const updatedCart = cart.map((item, index) =>
          index === existingProductIndex ?
            { ...item, quantity: item.quantity + 1 } :
            item
        );
        return { ...state, cart: updatedCart };
      } else {
        const updatedCart = [...cart, { ...action.payload, quantity: 1 }];
        return { ...state, cart: updatedCart };
      }
    }

    case types.CART_REMOVE: {
      const updatedCart = cart.filter(item => item.id !== action.payload);
      return { ...state, cart: updatedCart };
    }

    case types.CART_SET: {
      return { ...state, cart: action.payload };
    }

    case types.CART_CLEAR: {
      return { ...initialState };
    }

    default:
      return state;
  }
};

export default cartReducer;
