import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SingleProductCard from '../../components/cards/SingleProductCard';
import { getSingleProduct } from '../../utils/data/productData';

export default function SinglePainting() {
  const router = useRouter();
  const { id } = router.query;
  const [painting, setPainting] = useState({});

  const getSinglePainting = () => {
    getSingleProduct(id).then(setPainting);
  };

  useEffect(() => {
    getSinglePainting();
  }, [id]);

  return (
    <div>
      <SingleProductCard paintingObj={painting} />
    </div>
  );
}
