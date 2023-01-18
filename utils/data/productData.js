import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL PRODUCT CARDS
const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET SINGLE PRODUCT
const getSingleProduct = (productId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        title: data.title,
        description: data.description,
        imageUrl: data.image_url,
        price: data.price,
        quantity: data.quantity,
        seller: data.seller,
      });
    })
    .catch(reject);
});

export {
  getAllProducts,
  getSingleProduct,
};
