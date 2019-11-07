import React, { Component } from 'react';

export default class Register extends Component {
	
	render() {
		return(
			<div>
			<div>
				<h2>Registration</h2>
			</div>
			<div>
				<h3>Please fill out the following form</h3>
				<h4>Items marked with an asterisk* are required</h4>
			</div>
			<form id= 'registerForm'>
				<div>
					<label>Name*:</label> <input className='' type="name"/>
				</div>
				<div>
					<label>Email*:</label> <input className='' type="email"/>
					<label>ConfirmEmail*:</label> <input className='' type="emailConfirm"/>
				</div>
				<div>
					<label>Password*:</label> <input className='' type="password"/>
					<label>ConfirmPassword*:</label> <input className='' type="passwordConfirm"/>
				</div>
				<div>
					<label>Date of Birth:</label> <input className='' type="DoB"/>
					<label>PhoneNumber*:</label> <input className='' type="phone"/>
				</div>
				<div>
					<label>HomeAddress*:</label> <input className='' type="address"/>
					<label>Zip*:</label> <input className='' type="zip"/>
				</div>
				<div>
					<label>Country:</label>
					<select>
  						<option value="us">United States</option>
 						<option value="ca">Canada</option>
 						<option value="mx">Mexico</option>
					</select>
					<label>State/Territory:</label>
					<select>
  						<option value="ny">NY</option>
 						<option value="mn">MN</option>
 						<option value="pa">PA</option>
					</select>
				</div>
				<div>
					<input type="submit" value="Submit"></input>
				</div>
			</form>
			</div>

		)

	}

}