import React from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";
import { Navbar , Nav , NavDropdown , Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar>
      <Link to="/" className="navbar-brand">React App</Link>
    </Navbar>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movie" className="nav-link">Movie</Link>
        <Link to="/mini-game" className="nav-link">Game</Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <Link to="/food" className="dropdown-item">Food</Link>
          <NavDropdown.Divider />
          <Link to="/food" className="dropdown-item">Food</Link>
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