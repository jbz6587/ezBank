import React, { Component } from 'react';
import LandingNavbar from '../views/landingnavbar.js';
import '../css/createsupportticket.css';

export default class CreateSupportTicket extends Component {
	
	render() {
		return(
		<div className="SupportTicket">
			<div>
				<LandingNavbar/>
			</div>
			<h3>Submit Support Ticket</h3>
			<div id="instructions">
				<b>Please fill out the form below with your reason for contacting support, 
				an email address that can be used to contact you, and a description of your 
				request along with all relevant information. A member of our support team 
				will review your ticket and get in touch with you as soon as possible.</b>
			</div>
			
			<br/>
			
			<form id="SupportTicketForm">
				<div id="ticketContainer">
					<label>Subject: </label><input type="text"/>
					<br/>
					<br/>
					<label>Email: </label><input type="email"/>
					<br/>
					<br/>
					<label>Description: </label>
					<br/>
					<textarea></textarea>
				</div>
				
				<button id="SubmitTicketBtn">submit</button>
			</form>
			
		</div>
		)
	}
	
}