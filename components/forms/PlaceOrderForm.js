import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getUserPaymentTypes } from '../../utils/data/paymentTypeData';
import { createOrder } from '../../utils/data/orderData';

function PlaceOrderForm({ cartItemIds, cartItems }) {
  const [formInput, setFormInput] = useState({
    paymentTypeId: {
      id: 0,
      label: '',
      accountNumber: 0,
    },
  });
  let total = 0;
  if (cartItems.length) {
    cartItems.forEach((painting) => {
      total += Number(painting.price);
    });
  }
  const [paymentTypes, setPaymentTypes] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    getUserPaymentTypes(user.id).then(setPaymentTypes);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(user, cartItemIds, total, formInput).then(() => {
      router.replace(`/users/${user.id}`);
    });
  };

  return (
    <aside className="col-2">
      <h3>Total: ${total.toFixed(2)}</h3>
      <Form onSubmit={handleSubmit} id={total}>
        {paymentTypes ? (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Select Payment Method</Form.Label>
              <Form.Select
                name="paymentTypeId"
                onChange={handleChange}
                className="mb-3"
                value={formInput.paymentTypeId?.id}
                required
              >
                <option value="">Select...</option>
                {paymentTypes.map((paymentType) => (
                  <option
                    defaultValue={paymentType.id === formInput.paymentTypeId}
                    key={paymentType.id}
                    value={paymentType.id}
                  >
                    {paymentType.label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="warning" type="submit">
              Place Order
            </Button>
          </>
        ) : (
          <>
            <p>Please Add Payment Method</p>
            <Link href="/paymentTypes/new" passHref>
              <Button variant="success">Add</Button>
            </Link>
          </>
        )}
      </Form>
    </aside>
  );
}

PlaceOrderForm.propTypes = {
  cartItemIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    paintingObj: PropTypes.shape({
      id: PropTypes.number,
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

export default PlaceOrderForm;
