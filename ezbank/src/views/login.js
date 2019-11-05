import React, { Component } from 'react';
import '../css/login.css';


export default class Login extends Component {
	
	render() {
		return(
		<div>
			<div id='LogInDiv'>
				<h2 id='LogInTitle'>Log In</h2>
				<form id='LogInForm'>
					Email: <input className='LogInFormElement' type="email"/>
					<br/>
					Password: <input className='LogInFormElement' type="password"/>
					<br/>
					<button id='LogInButton'>Log In</button>
					<br/>
					<button id='RegisterButton'>Register</button>
					<br/>
					<a>Recover Username/Password</a>
				</form>
			</div>
			<div><a>Contact Us</a></div>
		</div>
		
		
		)
	}
	
}