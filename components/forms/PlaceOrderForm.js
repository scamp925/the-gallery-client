import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getUserPaymentTypes } from '../../utils/data/paymentTypeData';
import { createOrder } from '../../utils/data/orderData';

function PlaceOrderForm({ cartItemIds }) {
  const [formInput, setFormInput] = useState({
    total: '',
    customerId: 0,
    paymentType: {
      id: 0,
      label: '',
      accountNumber: 0,
    },
    associatedProductIds: cartItemIds,
  });
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
    createOrder(user, cartItemIds, formInput).then(() => {
      router.replace(`/users/${user.id}`);
    });
  };

  return (
    <aside className="col-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Total: $</Form.Label>
          <Form.Control name="label" required value={formInput.total} onChange={handleChange} />
        </Form.Group>
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
            {
              paymentTypes.map((paymentType) => (
                <option
                  defaultValue={paymentType.id === formInput.paymentTypeId}
                  key={paymentType.id}
                  value={paymentType.id}
                >
                  {paymentType.label}
                </option>
              ))
            }
          </Form.Select>
        </Form.Group>
        <Button variant="warning" type="submit">
          Place Order
        </Button>
      </Form>
    </aside>
  );
}

PlaceOrderForm.propTypes = {
  cartItemIds: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    total: PropTypes.number,
    customerId: PropTypes.shape({
      id: PropTypes.number,
    }),
    paymentTypeId: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      accountNumber: PropTypes.number,
    }),
    associatedProductIds: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })),
  }),
};

PlaceOrderForm.defaultProps = {
  orderObj: {},
};

export default PlaceOrderForm;
