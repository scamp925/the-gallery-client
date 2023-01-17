import firebase from 'firebase/app';
import 'firebase/auth';

const checkUser = (uid) => new Promise((resolve, reject) => {
  fetch('http://localhost:8000/checkuser', {
    method: 'POST',
    body: JSON.stringify({
      uid,
    }),
    headers: {
      Authorization: uid,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const registerUser = (userInfo) => new Promise((resolve, reject) => {
  fetch('http://localhost:8000/register', {
    method: 'POST',
    body: JSON.stringify({
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      username: userInfo.username,
      profile_image_url: userInfo.profileImageUrl,
      created_on: userInfo.createdOn,
      uid: userInfo.uid,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export {
  signIn, //
  signOut,
  checkUser,
  registerUser,
};
