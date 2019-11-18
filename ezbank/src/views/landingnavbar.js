import React, { Component } from 'react';
import '../css/landingnavbar.css';


export default class LandingNavbar extends Component {

	render() {
		return(
			<div id= "landingnavbarContainer">
				<a href="/">ez-Bank</a>
				<a id="logoutButton" href="/">log out</a>
			</div>
		)
	}
}
