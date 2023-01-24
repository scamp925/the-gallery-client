import React from 'react';
import PropTypes from 'prop-types';

const inititalState = {
  product_id: {
    id: 0,
    title: '',
    image_url: '',
    price: '',
    quantity: 1,
    seller: {
      id: 0,
      first_name: '',
      last_name: '',
    },
  },
};

function Cart({ cartItems }) {
  return (
    <main className="block col-2">
      <h2>Cart Items</h2>
      <div className="row">
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
      </div>
    </main>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    productOnOrderObj: PropTypes.shape({
      product_id: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image_url: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
        seller: PropTypes.shape({
          id: PropTypes.number,
          first_name: PropTypes.string,
          last_name: PropTypes.string,
        }),
      }),
    }),
  })),
};

Cart.defaultProps = {
  cartItems: inititalState,
};

export default Cart;
