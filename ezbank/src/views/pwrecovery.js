import React, { Component } from 'react';
import '../css/pwrecovery.css';
import LandingNavbar from '../views/landingnavbar.js';


export default class PWRecovery extends Component {

	displayRecoveryField = () => {
		
		var fieldHtml = "";
		
		if(document.getElementById("EmailRadio").checked){
			fieldHtml = "<form id='pwRecoveryForm'> <label>Email:</label> <input required type='email'/> <button id='pwRecoveryBtn'>Submit</button> </form>";
			document.getElementById("RecoveryField").innerHTML = fieldHtml;
		}
		else if (document.getElementById("PhoneNumRadio").checked){
			var regex = "^\\(?\\d{3}\\)?[\\s-]\\d{3}[\\s-]\\d{4}$";
			fieldHtml = "<form id='pwRecoveryForm'> <label>Phone Number:</label> <input id='phoneNumInput' required/> <button id='pwRecoveryBtn'>Submit</button> </form>";
			document.getElementById("RecoveryField").innerHTML = fieldHtml;
			var field = document.getElementById("phoneNumInput");
			field.pattern = regex;
			field.title = "Valid formats include:\n XXX-YYY-ZZZZ \n or (XXX) YYY-ZZZZ \n or XXX YYY ZZZZ \n or (XXX)-YYY-ZZZZ";
			
		}
		else {
			document.getElementById("RecoveryField").innerHTML = "";
		}
	}
	
	render() {
		return(
		<div className='PWRecovery'>
			<div>
				<LandingNavbar/>
			</div>
			<div id="instructions">
				<b>Password Recovery Page</b>
				<br/>
				Instructions: To recover your forgotten password, please choose a recovery method and then enter your email address or phone number into the provided field.
			</div>
			
			<div id='inputsDiv'>
				<label>Email:</label> <input id="EmailRadio" type="radio" value="Email" name="RecoveryMethod" onClick={this.displayRecoveryField}/>
				<br/>
				<label>Phone Number:</label> <input id="PhoneNumRadio" type="radio" value="Phone" name="RecoveryMethod" onClick={this.displayRecoveryField}/>
				<br/>
				<div id="RecoveryField">
					
				</div>
			</div>
			<div id="messageDiv">
				Forgot your eMail and Phone number? Contact an eZ-Bank employee at 555-BANK or  support@eZ-Bank.com 
			</div>
		</div>
		
		)
	}
	
}

