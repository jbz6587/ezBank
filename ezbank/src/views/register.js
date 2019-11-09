import React, { Component } from 'react';
import '../css/register.css';

export default class Register extends Component {
	
	render() {
		return(
			<div>
				<div id = "registerHeader">
					<div>
						<h2>Registration</h2>
					</div>
					<div>
						<h3>Please fill out the following form</h3>
						<h4>Items marked with an asterisk* are required</h4>
					</div>
					<br/>
				</div>
				<div id= "registerForm">
					<form>
						<div>
							<span class = "formLeft">
								<label>Name*:</label> <input type="name"/><br/>
								<label>Email*:</label> <input type="email"/><br/>
								<label>Password*:</label> <input type="password"/><br/>
								<label>Date of Birth:</label> <input type="DoB"/><br/>
								<label>HomeAddress*:</label> <input type="address"/><br/>
								<label>Country*: </label>
								<select id = "registerDropdown">
			  						<option value="us">United States</option>
			 						<option value="ca">Canada</option>
			 						<option value="mx">Mexico</option>
								</select>
							</span>
							<span class = "formRight">
								<br/><label>ConfirmEmail*:</label> <input type="emailConfirm"/><br/>
								<label>ConfirmPassword*:</label> <input type="passwordConfirm"/><br/>
								<label>PhoneNumber*:</label> <input type="phone"/><br/>
								<label>Zip*:</label> <input type="zip"/><br/>
								<label>State/Territory: </label>
								<select id = "registerDropdown">
			  						<option value="ny">NY</option>
			 						<option value="mn">MN</option>
			 						<option value="pa">PA</option>
								</select>
							</span>
						</div>
						<div>
							<br/><button>Register</button>
						</div>
					</form>
				</div>
			</div>

		)

	}

}