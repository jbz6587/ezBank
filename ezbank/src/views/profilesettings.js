import React, { Component } from 'react';
import '../css/profilesettings.css';
import SiteNavbar from '../views/sitenavbar.js';

export default class ProfileSettings extends Component {
	
	render() {
		return(
			<div>
				<div>
					<SiteNavbar/>
				</div>
				<div id= "psTitle">
					<h2>Profile/Settings</h2>
				</div>
				<div id= "psContainer">
					<div>
						<span className= "userInfoLabels">
							<p>Name: </p>
							<p>Address: </p>
							<p>Email: </p>
							<p>Phone Number: </p>
						</span>
						<span className= "userInfo">
							<p>Joe Shmoe </p>
							<p>123 Street Boulevard</p>
							<p>JoeShmoe@mail.com </p>
							<p>555-6789 </p>
						</span>
						<br/><br/>
						<button id="profileEditButton">edit</button>
						<br/><br/>
						<hr id="divideLine"/>
					</div>
					<div id= "settingsContainer">
						<div>
							<h3>Personalization:</h3>
							<p>stuff</p>
						</div>
						<div id="notifContainer">
							<h3>Notifications:</h3>
							<span className= "SettingsLabels">
								<p>Text Notifications: 555-6789</p>
								<p>Email Notifications: JoeShmoe@mail.com</p>
							</span>
							<div>
								<span className= "SettingsCheckboxes">
									<input type="checkbox" value="phoneNotifs1"/>Transaction Alerts<br/>
									<input type="checkbox" value="phoneNotifs2"/>Deposit Alerts
								</span>
								<br/><br/><br/><br/><br/><br/><br/>
								<span className= "SettingsCheckboxes">
									<input type="checkbox" value="phoneNotifs1"/>Transaction Alerts<br/>
									<input type="checkbox" value="phoneNotifs2"/>Deposit Alerts
								</span>
								<br/><br/><br/><br/><br/>
							</div>
						</div>
						<div id="securityContainer">
							<h3>Security:</h3>
							<div>
								<div>
									<p>2-Factor Authentication</p>
										<input type="checkbox" value="phoneNotifs1"/>Phone: ***-6789<br/>
										<input type="checkbox" value="phoneNotifs2"/>Email: ***Shmoe@mail.com
								</div>
								<div>
									<p>Fingerprint Scanner</p>
									<input type="checkbox" value="phoneNotifs1"/>Fingerprint1<br/>
								</div>
							</div>
						</div>
						<div>
							<br/>
							<button id= "saveButton">Save Changes</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}