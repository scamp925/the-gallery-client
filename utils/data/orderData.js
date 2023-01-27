import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL USER'S CLOSED ORDERS
const getUserClosedOrders = (userId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/order?user=${userId}&closed=true`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// CREATE ORDER
const createOrder = (user, cartIds, order) => new Promise((resolve, reject) => {
  const orderObj = {
    total_cost: Number(order.total),
    customer_id: user.id,
    payment_type: Number(order.paymentTypeId.id),
    associated_product_ids: [cartIds.id],
  };
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(orderObj),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getUserClosedOrders,
  createOrder,
};
