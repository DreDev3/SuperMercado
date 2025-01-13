import * as types from '../types';

export function cartAdd(product) {
return {
  type: types.CART_ADD,
  payload: product,
};
}

export function cartRemove(productId) {
  return {
    type: types.CART_REMOVE,
    payload: productId,
  };
  }

  export function cartSet(cart) {
    return {
      type: types.CART_SET,
      payload: cart,
    };
    }
