import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import NavBar from './NavBar';

function Signin() {
  return (
    <div>
      <NavBar />
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
