import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

function ProductCards({ paintingObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={paintingObj.imageUrl} />
        <Card.Body>
          <Card.Title>{paintingObj.title}</Card.Title>
          <Card.Subtitle>artist</Card.Subtitle>
          {/* <Card.Subtitle>{paintingObj.seller.firstName}{paintingObj.seller.lastName}</Card.Subtitle> */}
          <Link passHref href="/">More Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

ProductCards.propTypes = {
  paintingObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    seller: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductCards;
