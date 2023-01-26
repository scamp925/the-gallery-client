import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Cart({ cartItems }) {
  return (
    <main className="block col-2">
      <h2>My Cart</h2>
      <div className="row">
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
      </div>
      {cartItems.map((painting) => (
        <div key={painting?.id}>
          <div>
            <Image src={painting.imageUrl} alt={painting.title} width="450" height="500" />
          </div>
          <div>
            <p>{painting.title}</p>
            <p>By: {painting.sellerFirstName} {painting.sellerLastName}</p>
            <p>${painting.price}</p>
            <p>Quantity: {painting.quantity}</p>
          </div>
          <div>
            <Button variant="outline-success">+</Button>
          </div>
        </div>
      ))}
    </main>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    paintingObj: PropTypes.shape({
      title: PropTypes.string,
      image_url: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      seller: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
      }),
    }),
  })).isRequired,
};

export default Cart;
