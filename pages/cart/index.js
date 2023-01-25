import React, { useEffect, useState } from 'react';
import GalleryLogo from '../../components/GalleryLogo';
import NavBar from '../../components/NavBar';
import Cart from '../../components/Cart';
import { getAllProducts } from '../../utils/data/productData';

export default function CartView() {
  const [cartItems, setCartItems] = useState([]);

  const productsInCart = () => {
    getAllProducts().then(setCartItems);
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
