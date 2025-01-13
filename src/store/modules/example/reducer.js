import * as types from '../types';


const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD: {
      const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex >= 0) {
        const updatedCart = state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    }

    case types.CART_REMOVE: {
      const updatedCart = state.cart.filter(item => item.id !== action.payload);
      return { ...state, cart: updatedCart };
    }

    case types.CART_SET: {
      return { ...state, cart: action.payload };  // Definindo o carrinho com o payload (útil ao restaurar do localStorage)
    }

    default:
      return state;
  }
};

export default cartReducer;
