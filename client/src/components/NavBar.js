import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const styles = {
	'color' : '#19a0d8',
	'fontSize' : '35px',
	'display': 'inline-block'
}


const NavBar = () => (
	<Navbar>
	  <Navbar.Header>
	    <Navbar.Brand>
	      <a href="#home">React-Bootstrap</a>
	    </Navbar.Brand>
	  </Navbar.Header>
	</Navbar>

	)

export default NavBar;

