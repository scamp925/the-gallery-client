import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL USER PAYMENT TYPES
const getUserPaymentTypes = (userId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/paymenttypes?user=${userId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET SINGLE PAYMENT TYPE
const getSinglePaymentType = (productId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        label: data.label,
        accountNumber: data.account_number,
        customer: data.customer,
      });
    })
    .catch(reject);
});

// CREATE NEW PAYMENT TYPE
const createPaymentType = (user, paymentType) => new Promise((resolve, reject) => {
  const paymentTypeObj = {
    label: paymentType.label,
    account_number: Number(paymentType.accountNumber),
    customer_id: user.id,
  };
  fetch(`${clientCredentials.databaseURL}/paymenttypes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(paymentTypeObj),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// UPDATE SINGLE PAYMENT TYPE
const updatePaymentType = (user, paymentType, id) => new Promise((resolve, reject) => {
  const paymentTypeObj = {
    label: paymentType.label,
    account_number: Number(paymentType.accountNumber),
  };
  fetch(`${clientCredentials.databaseURL}/paymenttypes/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(paymentTypeObj),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

// DELETE SINGLE PAYMENT TYPE
const deletePaymentType = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/paymenttypes/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch(reject);
});

export {
  getUserPaymentTypes,
  getSinglePaymentType,
  createPaymentType,
  updatePaymentType,
  deletePaymentType,
};
