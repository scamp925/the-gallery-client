import Image from 'next/image';
import GalleryLogo from '../components/GalleryLogo';

function Home() {
  return (
    <>
      <div>
        <GalleryLogo />
      </div>
      <section>
        <Image src="/the-gallery.jpg" alt="Abstract Painting" width="2000" height="400" />
      </section>
    </>
  );
}

export default Home;
