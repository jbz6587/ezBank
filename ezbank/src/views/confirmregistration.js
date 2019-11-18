import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LandingNavbar from '../views/landingnavbar.js';
import '../css/confirmregistration.css';


export default class ConfirmRegistration extends Component {
	
	componentDidMount() {
		setTimeout(function(){
			window.location.href = "./";
		}, 5000);
	}
	
	render() {
		return(
			<div class="RegistrationComplete">
				<div>
					<LandingNavbar/>
				</div>
				<div>
					<h2>Registration Successful!</h2>
				</div>
				<div>
					<h3>You have completed the account registration process successfully.</h3>
					<h3>You will be redirected to the log-in page in a few seconds.</h3>
				</div>
			</div>
		)

	}

}