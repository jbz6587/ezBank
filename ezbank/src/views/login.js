import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/login.css';
import LandingNavbar from '../views/landingnavbar.js';


export default class Login extends Component {
	
	constructor(props) {
	        super(props)
	        this.state = {
	        	email : '',
	        	password : ''
	        };
	        this.handleEmailChange = this.handleEmailChange.bind(this);
    		this.handlePasswordChange = this.handlePasswordChange.bind(this);
    		this.handleSumbit = this.handleSumbit.bind(this);
	}

	displayCapsLockWarning = (e) => {
		var errorDiv = document.getElementById("errorDiv");
		if(e.getModifierState("CapsLock")){
			errorDiv.innerHTML = "Warning: CapsLock is enabled.";
		}
		else{
			errorDiv.innerHTML = "";
		}
	}

	handleSumbit(event){
		event.preventDefault();
		if(this.state.email == "admin@ezbank.com" && this.state.password == "admin"){
			console.log("An admin is logging in");
			this.props.history.push('/employee-dashboard');
		}else if(this.state.email == "user@ezbank.com" && this.state.password == "user"){
			this.props.history.push('/home');
		}else{
			alert('Incorrect username or password');
		}
	}

	handleEmailChange(event){
		this.setState({ email: event.target.value });
	}

	handlePasswordChange(event){
		this.setState({ password: event.target.value });
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

					<form id='LogInForm' onSubmit={this.handleSumbit}>
						<div className="block">
							<label>Email:</label> <input className='LogInFormElement' type="email" onChange={this.handleEmailChange} required/>
						</div>
						<div className="block">
							<label>Password:</label> <input className='LogInFormElement' type="password" onKeyUp={this.displayCapsLockWarning} onChange={this.handlePasswordChange} required/>
						</div>
						<div id="errorDiv"></div>
						<button type="submit" id='LogInButton'>Log In</button>
						<br/>
					</form>

					<Link to='/register'><button id='RegisterButton'>Register</button></Link>
					<br/>
					<Link to='/pwrecovery'>Recover Username/Password</Link>
				</div>
				<Link to={{pathname: '/contact', state: {useReducedNav: true}}}>Contact Us</Link>
			</div>
		</div>
		);
	}
	
}