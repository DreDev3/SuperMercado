import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prevCart => {

      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

      if (existingProductIndex >= 0) {
        return prevCart.map((item, index) => index === existingProductIndex ?
          { ...item, quantity: item.quantity + 1 }
          : item);
      } else {

        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = id => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      }).filter(item => item !== null);

      return updatedCart;
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
