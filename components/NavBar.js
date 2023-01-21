/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { signIn, signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>All Paintings</Nav.Link>
            </Link>
            {user && (
              <>
                <NavDropdown title="My Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href={`users/${user.id}`}>Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Order History</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={signOut}>Log Out</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
            {!user && (
            <>
              <Link passHref href="/register">
                <Nav.Link onClick={signIn}>Register</Nav.Link>
              </Link>
              <Navbar.Text>|</Navbar.Text>
              <Link passHref href="/">
                <Nav.Link onClick={signIn}>Log In</Nav.Link>
              </Link>
            </>
            )}
            <Link passHref href="/">
              <Nav.Link><FaShoppingCart size={30} /></Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
