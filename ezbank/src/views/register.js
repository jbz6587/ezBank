import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/register.css';
import LandingNavbar from '../views/landingnavbar.js';


export default class Register extends Component {
	
	handleRegistrationFormSubmit = (e) => {
		e.preventDefault();
		var form = document.getElementById("registerForm");
		var errorMessage = "";
		
		if(form["RegisterPWInput"].value !== form["RegisterConfirmPWInput"].value){
			errorMessage += "Error: The Password and ConfirmPassword values do not match.\n";
		}
		
		if(form["RegisterEmailInput"].value !== form["RegisterConfirmEmailInput"].value){
			errorMessage += "Error: The Email and ConfirmEmail values do not match.\n";
		}
		if(errorMessage === ""){
			window.location.href = "./registration-complete";
		}
		else{
			var errorDiv = document.getElementById("RegistrationErrorDiv");
			errorDiv.innerText = errorMessage;
			errorDiv.style.color = "red";
		}
	}
	
	render() {
		return(
			<div>
				<div>
					<LandingNavbar/>
				</div>
				<div id = "registerHeader">
					<div>
						<h2>Registration</h2>
					</div>
					<div>
						<h3>Please fill out the following form</h3>
						<h4>Items marked with an asterisk* are required</h4>
					</div>
					<div id="RegistrationErrorDiv">
					</div>
					<br/>
				</div>
				<div id="registerFormDiv">
					<form id="registerForm" onSubmit={this.handleRegistrationFormSubmit}>
						<div>
							<span className="formLeft">
								<label>Name*:</label> <input id="RegisterNameInput" type="name" required/>
								<br/>
								<br/>
								<label>Email*:</label> <input id="RegisterEmailInput" type="email" required/>
								<br/>
								<br/>
								<label>Password*:</label> <input id="RegisterPWInput" type="password" required/>
								<br/>
								<br/>
								<label>Date of Birth:</label> <input id="RegisterDoBInput" type="date"/>
								<br/>
								<br/>
								<label>HomeAddress*:</label> <input id="RegisterAddressInput" type="address" required/>
								<br/>
								<br/>
								<label>Country*: </label>
								<select id="RegisterCountrySelect" className="registerDropdown" required>
			  						<option value="us">United States</option>
			 						<option value="ca">Canada</option>
			 						<option value="mx">Mexico</option>
								</select>
							</span>
							<span className="formRight">
								<br/>
								<label>ConfirmEmail*:</label> <input id="RegisterConfirmEmailInput" type="emailConfirm" required/>
								<br/>
								<br/>
								<label>ConfirmPassword*:</label> <input id="RegisterConfirmPWInput" type="passwordConfirm" required/>
								<br/>
								<br/>
								<label>PhoneNumber*:</label> <input id="RegisterPhoneInput" type="phone" required/>
								<br/>
								<br/>
								<label>Zip*:</label> <input id="RegisterZipInput" type="zip" required/>
								<br/>
								<br/>
								<label>State/Territory*: </label>
								<select id="RegisterStateInput" className="registerDropdown" required>
			  						<option value="ny">NY</option>
			 						<option value="mn">MN</option>
			 						<option value="pa">PA</option>
								</select>
							</span>
						</div>
						<div>
							<br/>
							<button>Register</button>
							<Link to="./"><button>Cancel</button></Link>
						</div>
					</form>
				</div>
			</div>

		)

	}

}