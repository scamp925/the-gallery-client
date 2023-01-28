import React, { useContext } from 'react';
import GalleryLogo from '../../components/GalleryLogo';
import Cart from '../../components/Cart';
import { CartContext } from '../../components/CartProvider';
import PlaceOrderForm from '../../components/forms/PlaceOrderForm';

export default function CartView() {
  const { cartItems, cartItemIds } = useContext(CartContext);

  return (
    <div>
      <GalleryLogo />
      <Cart cartItems={cartItems} />
      {cartItemIds.length !== 0 && <PlaceOrderForm cartItemIds={cartItemIds} cartItems={cartItems} />}
    </div>
  );
}
