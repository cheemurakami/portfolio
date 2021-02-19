import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
import kiwiIcon from "../images/kiwiIcon30.png";

function NavBar() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img style={{ marginRight: "10px" }} src={kiwiIcon} alt="kiwiIcon" />
          Chisato Murakami Software Engineer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/myhobbies">
              My Hobbies
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
