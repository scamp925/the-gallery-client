import React, { useEffect, useState } from 'react';
import GalleryLogo from '../../components/GalleryLogo';
import NavBar from '../../components/NavBar';
import Cart from '../../components/Cart';
import { getUserProductsOnOrder } from '../../utils/data/productOnOrderData';
import { useAuth } from '../../utils/context/authContext';

export default function CartView() {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();

  const productsInCart = () => {
    getUserProductsOnOrder(user.id).then(setCartItems);
  };

  useEffect(() => {
    productsInCart();
  }, []);

  return (
    <div>
      <NavBar />
      <GalleryLogo />
      <Cart cartItems={cartItems} />
    </div>
  );
}
