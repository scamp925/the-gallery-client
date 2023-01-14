import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser
import GalleryLogo from './GalleryLogo';

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    username: '',
    profile_image_url: '',
    uid: user.uid,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
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
          <Form.Control name="profile_image_url" required placeholder="Image URL" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        </Form.Group>
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
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
