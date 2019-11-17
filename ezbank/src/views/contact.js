import React, { Component } from 'react';
import LandingNavbar from '../views/landingnavbar.js';

export default class Contact extends Component {
	
	render() {
		return(
		<div>
			<div>
				<LandingNavbar/>
			</div>
			<div id='ContactDiv'>
				<h2 id='ConctactTitle'>Contact Information</h2>
				<div>
					<h3 id='HoursTitle'> Business Hours:</h3>
						<div>
							<p> Monday - Friday: 		9am  - 5pm</p>
							<br/>Saturday: 				10am - 4pm
							<br/>Sunday: 				closed
						</div>
					<h3 id='ContactCS'> Customer Service: </h3>
						<div>
							<p> For general questions:</p>
							<p> Phone: 1-800-555-5555 			Email: customerservice@ezbank.com</p>
						</div>
					<h3 id= 'SuportTitle'>Tech Support:</h3>
						<p>For help with account recovery, or to report an issue with the site,
				 		email support@eZ-Bank.com or submit a ticket using the link below.</p>
				 </div>
			</div>
		</div>
		
		
		)
	}
	
}