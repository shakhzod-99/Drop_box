import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NAvbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to='/'>
       Drop-Box
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to='/user'>
          Profile
        </Nav.Link>
        <Form className="d-flex" style={{"justifyContent":"flex-end"}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
      </Nav>
    </Navbar>
  )
}
