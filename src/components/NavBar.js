import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import{Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto"></Nav>
          <Navbar.Brand as={Link} to={"/"}>Cryptotrack</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"/blog"}>
              Blog
            </Nav.Link> <Nav.Link as={Link} to={"/services"}>
              Services
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar
