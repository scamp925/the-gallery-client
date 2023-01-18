import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

const getSingleUser = (userId, uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${userId}`, {
    headers: {
      Authorization: uid,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        uid: data.uid,
        firstName: data.first_name,
        lastName: data.last_name,
        username: data.username,
        profileImageUrl: data.profile_image_url,
        createdOn: data.created_on,
      });
    })
    .catch((error) => reject(error));
});

export default getSingleUser;
