import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

function PaymentTypeCards({ paymentObj }) {
  return (
    <div className="payment-container">
      <p>{paymentObj.label}</p>
      <p>{paymentObj.account_number}</p>
      <div>
        <Link href={`/paymentTypes/edit/${paymentObj.id}`} passHref>
          <Button variant="info" className="edit-btn">Edit</Button>
        </Link>
        <Button variant="danger" className="delete-btn">Delete</Button>
      </div>
    </div>
  );
}

PaymentTypeCards.propTypes = {
  paymentObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    account_number: PropTypes.number,
    customer: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default PaymentTypeCards;
