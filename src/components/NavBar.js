import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import kiwiIcon from '../images/kiwiIcon30.png';

function NavBar() {
  return (
    <React.Fragment>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">
      <img style={{marginRight: "10px"}} src={kiwiIcon} alt="kiwiIcon"/>
     Chee Murakami
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/projects">Gurumi the Florist</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/projects">Urban Tails Shelter</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/projects">Record Collector</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#">Contact</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Others
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </React.Fragment>
    
  )
}

export default NavBar