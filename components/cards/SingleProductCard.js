import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function SingleProductCard({ paintingObj }) {
  return (
    <>
      <section>
        <Image src={paintingObj.imageUrl} alt="Painting for sale" width="400" height="400" />
      </section>
      <section>
        <h4>{paintingObj.title}</h4>
        <h5>{paintingObj.seller.first_name} {paintingObj.seller.last_name}</h5>
      </section>
      <section>
        <p>{paintingObj.description}</p>
      </section>
    </>
  );
}

SingleProductCard.propTypes = {
  paintingObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    seller: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default SingleProductCard;
