import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartProvider';

function SingleProductCard({ paintingObj }) {
  const {
    cartItems, setCartItems, cartItemIds, setCartItemIds,
  } = useContext(CartContext);

  const handleClick = () => {
    const idList = [...cartItemIds, paintingObj.id];
    setCartItemIds(idList);
    setCartItems([...cartItems, {
      imageUrl: paintingObj.imageUrl, title: paintingObj.title, price: paintingObj.price, sellerFirstName: paintingObj.seller?.first_name, sellerLastName: paintingObj.seller?.last_name, quantity: paintingObj.quantity,
    }]);
  };

  return (
    <div className="single-product-container">
      <section className="single-product-image">
        <Image src={paintingObj.imageUrl} alt="Painting for sale" width="450" height="500" />
      </section>
      <section className="single-product-details">
        <h4>{paintingObj.title}</h4>
        <h5>{paintingObj.seller?.first_name} {paintingObj.seller?.last_name}</h5>
        <h4>${paintingObj.price}</h4>
        <Link passHref href="/cart">
          <Button onClick={handleClick} variant="outline-success">Add to Cart</Button>
        </Link>
      </section>
      <section className="single-product-description">
        <p>{paintingObj.description}</p>
      </section>
    </div>
  );
}

SingleProductCard.propTypes = {
  paintingObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    seller: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
  }).isRequired,
};

export default SingleProductCard;
