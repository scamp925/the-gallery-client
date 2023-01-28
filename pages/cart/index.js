import React, { useContext } from 'react';
import GalleryLogo from '../../components/GalleryLogo';
import NavBar from '../../components/NavBar';
import Cart from '../../components/Cart';
import { CartContext } from '../../components/CartProvider';
import PlaceOrderForm from '../../components/forms/PlaceOrderForm';

export default function CartView() {
  const { cartItems, cartItemIds } = useContext(CartContext);

  return (
    <div>
      <NavBar />
      <GalleryLogo />
      <Cart cartItems={cartItems} />
      <PlaceOrderForm cartItemIds={cartItemIds} cartItems={cartItems} />
    </div>
  );
}
