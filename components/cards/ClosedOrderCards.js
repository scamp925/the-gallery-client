import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Image from 'react-bootstrap/Image';

function ClosedOrderCards({ orderDetails }) {
  return (
    <>
      {orderDetails.associated_products.map((product) => (
        <tr key={orderDetails.id}>
          <td>{orderDetails.id}</td>
          <td>{product.title} By: {product.first_name} {product.last_name}</td>
          <td>${orderDetails.total_cost}</td>
          <td><Image src={product.image_url} alt={product.title} width="125" height="130" /></td>
        </tr>
      ))}
    </>
  );
}

ClosedOrderCards.propTypes = {
  orderDetails: PropTypes.shape({
    id: PropTypes.number,
    total_cost: PropTypes.string,
    associated_products: arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image_url: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    })),
  }).isRequired,
};

export default ClosedOrderCards;
