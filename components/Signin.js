/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ProductCards from './cards/ProductCards';
import GalleryLogo from './GalleryLogo';
import NavBar from './NavBar';
import { getAllProducts } from '../utils/data/productData';

function Signin() {
  const [paintings, setPaintings] = useState([]);

  const getAllPaintings = () => {
    getAllProducts().then(setPaintings);
  };

  useEffect(() => {
    getAllPaintings();
  }, []);

  return (
    <>
      <NavBar />
      <GalleryLogo />
      <section>
        <Image src="/the-gallery.jpg" alt="Abstract Painting" width="2000" height="400" />
      </section>
      <div>
        <h3>What's selling?</h3>
        {paintings?.map((painting) => (
          <ProductCards key={painting.id} paintingObj={painting} />
        ))}
      </div>
    </>
  );
}

export default Signin;
