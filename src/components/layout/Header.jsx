import React from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";
import { Navbar , Nav , NavDropdown , Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >App</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/" style={{ textDecoration: 'none', color: 'white' }} >Home</Link></Nav.Link>
        <Nav.Link><Link to="/movie" style={{ textDecoration: 'none', color: 'white' }}>Movie</Link></Nav.Link>
        <Nav.Link><Link to="/mini-game" style={{ textDecoration: 'none', color: 'white' }}>Game</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item><Link to="/food" style={{ textDecoration: 'none', color: 'black' }}>Food</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item><Link to="/food" style={{ textDecoration: 'none', color: 'black' }}>Food</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {/* <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;