import React, { Component } from 'react';
import '../css/login.css';


export default class Login extends Component {
	
	render() {
		return(
		<div>
			<div id='LogInDiv'>
				<h2 id='LogInTitle'>Log In</h2>
				<form id='LogInForm'>
					<div className="block">
						<label>Email:</label> <input className='LogInFormElement' type="email"/>
					</div>
					<div className="block">
						<label>Password:</label> <input className='LogInFormElement' type="password"/>
					</div>
					<button id='LogInButton'>Log In</button>
					<br/>
				</form>
				<button id='RegisterButton'>Register</button>
				<br/>
				<a>Recover Username/Password</a>
			</div>
			<div><a>Contact Us</a></div>
		</div>
		
		
		)
	}
	
}