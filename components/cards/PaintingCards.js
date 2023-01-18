import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

function PaintingCards({ paintingObj }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={paintingObj.imageUrl} />
        <Card.Body>
          <Card.Title>{paintingObj.title}</Card.Title>
          <Card.Subtitle>Arist</Card.Subtitle>
          <Link passHref href="/">More Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

PaintingCards.propTypes = {
  paintingObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default PaintingCards;
