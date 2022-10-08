import React from 'react'
import{Navbar,Nav,Container} from "react-bootstrap"

const NavBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Crytotrack</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#cryptotack">Services</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar
