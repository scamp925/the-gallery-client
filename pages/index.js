/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import ProductCards from '../components/cards/ProductCards';
import GalleryLogo from '../components/GalleryLogo';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <GalleryLogo />
      <section>
        <Image src="/the-gallery.jpg" alt="Abstract Painting" width="2000" height="400" />
      </section>
      <div>
        <h3>What's selling?</h3>
        <ProductCards />
      </div>
    </>
  );
}

export default Home;
