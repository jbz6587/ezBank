import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LandingNavbar from '../views/landingnavbar.js';
import '../css/contact.css';

export default class Contact extends Component {
	
	render() {
		return(
		<div>
			<div>
				<LandingNavbar/>
			</div>
			<div id='contactContainer'>
				<h2 id='ConctactTitle'>Contact Information</h2>
				<div>
					<h3 id='HoursTitle'> Business Hours:</h3>
						<div>
							<p> Monday - Friday: 9am - 5pm</p>
							<p> Saturday: 10am - 4pm</p>
							<p> Sunday: closed</p>
							<br/>
						</div>
					<h3 id='ContactCS'> Customer Service: </h3>
						<div>
							<u> For general questions:</u>
							<p> Phone: 1-800-555-5555, Email: customerservice@ezbank.com</p>
							<br/>
						</div>
					<h3 id= 'SuportTitle'>Tech Support:</h3>
						<p>For help with account recovery, or to report an issue with the site,
				 		email support@eZ-Bank.com or submit a help request using the link below.</p>
				 </div>
				 <div>
				 	<Link to='/create-support-ticket'><button id= "helpButton">Submit Help Request</button></Link>
				 </div>
			</div>
		</div>
		
		
		)
	}
	
}