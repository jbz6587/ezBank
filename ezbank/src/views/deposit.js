import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/deposit.css';
import SiteNavbar from '../views/sitenavbar.js';

export default class Deposit extends Component {

	render(){
		return(
			<div>
				<div id="navBar">
					<SiteNavbar/>
				</div>
				<div id="depositContainer">
					<div>
						<h2>Electronic Check Deposit</h2>
					</div>
					<form>
						<div>
							<b><u>Select an account to deposit to:</u></b>
							<br/>
							<select className="DepositInputElement">
	  							<option value="ac1">Account1: $100</option>
	 							<option value="ac2">Account2: $1000</option>
	 							<option value="ac3">Account3: $5690</option>
							</select>
						</div>
						<div>
							<br/>
							<b><u>Enter amount to be deposited:</u></b><br/>
							<input className="DepositInputElement"/>
							<label id="depositItemNote">*limit $3000*</label>
						</div>
						<div>
							<br/>
							<b>Upload Images</b>
							<br/>
							<div class= "imagePlaceholder">image1</div>
							<div class= "imagePlaceholder">image2</div>
						</div>
						<div>
							<br/><br/><br/><br/><br/>
							<button type="button">Submit</button>
							<button type="button">Cancel</button>
						</div>
					</form>
				</div>
			</div>

			)

	}

}