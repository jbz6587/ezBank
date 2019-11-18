import React, { Component } from 'react';
import '../css/transfer.css';
import {Link} from 'react-router-dom';
import SiteNavbar from '../views/sitenavbar.js';
import Scheduler from '../views/scheduler.js';

export default class Transfer extends Component {
	
	constructor(props) {
		super(props)
	    this.state = {
			user : "Joe Schmoe",
	        accounts : {
				account1 : { type : 'Checkings', balance : '3,000', accountid : '6513219447', accNickName : 'Pay the bills'},
	          	account2 : { type : 'Savings', balance : '420,000', accountid : '6567218975', accNickName : 'Rainy Day Fund'}
	        }
	    };
	}
	
	toggleSchedulerDialog = () => {
		var dialog = document.getElementById("schedulerDiv");
		if(dialog.style.display !== "inline-block"){
			dialog.style.display = "inline-block";
		}
		else {
			dialog.style.display = "none";
		}
	}
	
	render() {
		return(
			<div>
				<div id="navBar">
					<SiteNavbar/>
				</div>
				<div className='Transfer'>
					<div>
						<h2>Make Transfer</h2>
					</div>
					<div>
						<b><u>Select Accounts:</u></b>
						<button id="scheduleTransferBtn" onClick={this.toggleSchedulerDialog}>Schedule Transfers</button>
					</div>
					<br/>
					<form id="transferForm">
						<label>From:</label>
						<br/>
						<select id="transferFromAcctSel" className="transferFormElement">
							<option value="">-- Select Account --</option>
						</select>
						<br/><br/>
						<label>To:</label>
						<br/>
						<select id="transferToAcctSel" className="transferFormElement">
							<option value="">-- Select Account --</option>
						</select>
						<br/><br/>
						<label>Amount:</label>
						<br/>
						<input id="transferAmt" className="transferFormElement" type="number" step="0.01" min="0.00" required></input>
						<br/><br/>
						<button id="confirmTransferBtn">Confirm</button>
						<Link to="./home"><button id="cancelTransferBtn">Cancel</button></Link>
					</form>
				</div>
				<div id="schedulerDiv">
					<Scheduler/>
				</div>
			</div>
		)
	}
	
}