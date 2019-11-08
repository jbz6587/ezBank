import React, { Component } from 'react';
import '../css/pwrecovery.css';

export default class PWRecovery extends Component {

	displayRecoveryField = () => {
		
		var fieldHtml = "";
		
		if(document.getElementById("EmailRadio").checked){
			fieldHtml = "<form id='pwRecoveryForm'><label>Email:</label> <input type='email'/></form>";
			document.getElementById("RecoveryField").innerHTML = fieldHtml;
		}
		else if (document.getElementById("PhoneNumRadio").checked){
			fieldHtml = "<form id='pwRecoveryForm'><label>Phone Number:</label> <input type='tel'/></form>";
			document.getElementById("RecoveryField").innerHTML = fieldHtml;
		}
		else {
			document.getElementById("RecoveryField").innerHTML = "";
		}
		
		console.log("Radio button was clicked");
	}
	
	render() {
		return(
		<div>
			<div id="instructions">
				<b>Password Recovery Page</b>
				<br/>
				Instructions: To recover your forgotten password, please choose a recovery method and then enter your email address or phone number into the provided field.
			</div>
			Email: <input id="EmailRadio" type="radio" value="Email" name="RecoveryMethod" onClick={this.displayRecoveryField}/>
			Phone Number: <input id="PhoneNumRadio" type="radio" value="Phone" name="RecoveryMethod" onClick={this.displayRecoveryField}/>
			<div id="RecoveryField">
			
			</div>
		</div>
		
		)
	}
	
}

