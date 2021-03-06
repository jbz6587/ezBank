import React, { Component } from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import '../css/sitenavbar.css';

export default class SiteNavbar extends Component {

	render(){
		return(
			<div id="NavbarContainer">
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand className="navLogo" href="/home">eZ-Bank</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link className="navLink" href="./home">Home</Nav.Link>
						<Nav.Link className="navLink" href="./transfer">Transfer</Nav.Link>
						<Nav.Link className="navLink" href="./deposit">Deposit</Nav.Link>
						<Nav.Link className="navLink" href="./help">Help</Nav.Link>
						<Nav.Link className="navLink" href="./contact">Contact Us</Nav.Link>
						<Nav.Link className="navLink" href="./profilesettings">Profile/Settings</Nav.Link>
						<a id="logoutButton" href="/">log out</a>
					</Nav>

				</Navbar>
			</div>
		)

	}

}