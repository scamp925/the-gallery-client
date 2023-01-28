import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

function ClosedOrderCards({ orderDetails }) {
  return (
    <div>
      <p>Order: {orderDetails.id}</p>
      <p>{orderDetails.associated_products.title} By: {orderDetails.associated_products.seller?.first_name} {orderDetails.associated_products.seller?.last_name}</p>
      <p>Total Cost: ${orderDetails.total_cost}</p>
      <p>{orderDetails.associated_products.image_url}</p>
    </div>
  );
}

ClosedOrderCards.propTypes = {
  orderDetails: PropTypes.shape({
    id: PropTypes.number,
    total_cost: PropTypes.string,
    associated_products: arrayOf(PropTypes.string),
  }).isRequired,
};

export default ClosedOrderCards;
