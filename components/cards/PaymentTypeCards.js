import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { deletePaymentType } from '../../utils/data/paymentTypeData';

function PaymentTypeCards({ paymentObj, onUpdate }) {
  const router = useRouter();
  const deleteThisPaymentMethod = () => {
    if (window.confirm(`Heads up! You are about to permanently delete ${paymentObj.label}. Click "OK" if you wish to continue.`)) {
      deletePaymentType(paymentObj.id).then(() => onUpdate()).then(() => {
        router.push(`/users/${paymentObj.customer.id}`);
      });
    }
  };

  return (
    <div className="payment-container">
      <p>{paymentObj.label}</p>
      <p>{paymentObj.account_number}</p>
      <div>
        <Link href={`/paymentTypes/edit/${paymentObj.id}`} passHref>
          <Button variant="info" className="edit-btn">Edit</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisPaymentMethod} className="delete-btn">Delete</Button>
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
  onUpdate: PropTypes.func.isRequired,
};

export default PaymentTypeCards;
