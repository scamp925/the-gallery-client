import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/auth'; // Update with path to registerUser
import GalleryLogo from './GalleryLogo';

function RegisterForm({ user, updateUser }) {
  const [firstName, lastName] = user.fbUser.displayName.split(' ');
  const date = new Date().toISOString().slice(0, 10);
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    username: '',
    profileImageUrl: '',
    createdOn: date,
    uid: user.uid,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
    console.warn('formData', formData);
    console.warn('user', user);
  };

  return (
    <>
      <GalleryLogo />
      <h3>Complete Your Account Registration</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text">Create a Username</Form.Label>
          <Form.Control name="username" required placeholder="e.g. Cool_Kats" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
          <Form.Text className="text-muted">***Username MUST be different from your first and last name</Form.Text>
          <div />
          <Form.Label className="text">Profile Image</Form.Label>
          <Form.Control name="profileImageUrl" required placeholder="Image URL" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        </Form.Group>
        <Button variant="danger" onClick={() => router.push('/')}>
          Cancel
        </Button>
        <Button variant="dark" type="submit">
          Register for Account
        </Button>
      </Form>
    </>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    fbUser: PropTypes.shape({
      displayName: PropTypes.string,
    }).isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
