/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemIds, setCartItemIds] = useState([]);

  return (
    <CartContext.Provider value={{
      cartItems, setCartItems, cartItemIds, setCartItemIds,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};
