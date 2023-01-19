import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

function ProductCards({ paintingObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={paintingObj.image_url} />
        <Card.Body>
          <Card.Title>{paintingObj.title}</Card.Title>
          <Card.Subtitle>{paintingObj.seller.first_name} {paintingObj.seller.last_name}</Card.Subtitle>
          <hr />
          <Link passHref href={`/products/${paintingObj.id}`}>More Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

ProductCards.propTypes = {
  paintingObj: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    title: PropTypes.string,
    seller: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductCards;
