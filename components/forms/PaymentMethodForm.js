import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPaymentType } from '../../utils/data/paymentTypeData';

function PaymentMethodForm() {
  const [formInput, setFormInput] = useState({
    label: '',
    accountNumber: '',
    customerId: '',
  });
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPaymentType(user, formInput).then(() => {
      router.replace(`/users/${user.id}`);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Payment Method (Credit Card, PayPal, Bank Account)</Form.Label>
        <Form.Control name="label" required value={formInput.label} onChange={handleChange} />
        <Form.Label>Account Number</Form.Label>
        <Form.Control name="accountNumber" required value={formInput.accountNumber} onChange={handleChange} />
      </Form.Group>
      <Button variant="danger" onClick={() => router.push(`/users/${user.id}`)}>
        Cancel
      </Button>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PaymentMethodForm;
