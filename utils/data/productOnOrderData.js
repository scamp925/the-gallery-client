import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL USER PRODUCTS ON ORDER
const getUserProductsOnOrder = (userId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/productonorders?user=${userId}&order=null`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// UPDATE SINGLE PRODUCTS ON ORDER ENTITY
const updateProductOnOrder = (order, id) => new Promise((resolve, reject) => {
  const productOnOrderObj = {
    order_id: order.id,
  };
  fetch(`${clientCredentials.databaseURL}/productonorders/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(productOnOrderObj),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

export {
  getUserProductsOnOrder,
  updateProductOnOrder,
};
