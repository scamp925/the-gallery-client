/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import PaintingCards from '../components/cards/PaintingCards';
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
        <PaintingCards />
      </div>
    </>
  );
}

export default Home;
