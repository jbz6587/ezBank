import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../css/login.css';


export default class Login extends Component {
	
	render() {
		return(
		<div className='Login'>
			<div id='LogInDiv'>
				<h2 id='LogInTitle'>Log In</h2>
				<form id='LogInForm'>
					<div className="block">
						<label>Email:</label> <input className='LogInFormElement' type="email" required/>
					</div>
					<div className="block">
						<label>Password:</label> <input className='LogInFormElement' type="password" required/>
					</div>
					<button id='LogInButton'>Log In</button>
					<br/>
				</form>
				<Link to='/register'><button id='RegisterButton'>Register</button></Link>
				<br/>
				<Link to='/pwrecovery'>Recover Username/Password</Link>
			</div>
			<Link to='/contact'>Contact Us</Link>
		</div>
		)
	}
	
}