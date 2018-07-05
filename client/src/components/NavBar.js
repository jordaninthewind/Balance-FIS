import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router';

const NavBar = () => (
	<Navbar>
	  <Navbar.Header>
	    <Navbar.Brand>
	      <a href="#home">Balance App</a>
	    </Navbar.Brand>
	  </Navbar.Header>
	  <Nav>
	    <NavDropdown eventKey={1} title="Options" id="basic-nav-dropdown">
	      <MenuItem eventKey={1.1}>Action</MenuItem>
	      <MenuItem eventKey={1.2}>Another action</MenuItem>
	      <MenuItem eventKey={1.3}>Something else here</MenuItem>
	    </NavDropdown>
	  </Nav>
	</Navbar>

	)

export default NavBar;

