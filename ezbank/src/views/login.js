import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/login.css';
import LandingNavbar from '../views/landingnavbar.js';


export default class Login extends Component {
	
	displayCapsLockWarning = (e) => {
		var errorDiv = document.getElementById("errorDiv");
		if(e.getModifierState("CapsLock")){
			
			errorDiv.innerHTML = "Warning: CapsLock is enabled.";
		}
		else{
			errorDiv.innerHTML = "";
		}
	}
	
	render() {
		return(
		<div>
			<div>
				<LandingNavbar/>
			</div>
			<div className='Login'>
				<div id='LogInDiv'>
					<h2 id='LogInTitle'>Log In</h2>
					<form id='LogInForm'>
						<div className="block">
							<label>Email:</label> <input className='LogInFormElement' type="email" required/>
						</div>
						<div className="block">
							<label>Password:</label> <input className='LogInFormElement' type="password" onKeyUp={this.displayCapsLockWarning} required/>
						</div>
						<div id="errorDiv"></div>
						<button id='LogInButton'>Log In</button>
						<br/>
					</form>
					<Link to='/register'><button id='RegisterButton'>Register</button></Link>
					<br/>
					<Link to='/pwrecovery'>Recover Username/Password</Link>
				</div>
				<Link to='/contact'>Contact Us</Link>
			</div>
		</div>
		)
	}
	
}