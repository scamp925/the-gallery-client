import React, { useContext } from 'react';
import GalleryLogo from '../../components/GalleryLogo';
import NavBar from '../../components/NavBar';
import Cart from '../../components/Cart';
import { CartContext } from '../../components/CartProvider';

export default function CartView() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <NavBar />
      <GalleryLogo />
      <Cart cartItems={cartItems} />
    </div>
  );
}
