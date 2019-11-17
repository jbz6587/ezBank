import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/landingnavbar.css';


export default class LandingNavbar extends Component {

	render() {
		return(
			<div id= "landingnavbarContainer">
				<a href="/">ez-Bank</a>
			</div>
		)
	}
}
