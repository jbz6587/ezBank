import React, { Component } from 'react';
import '../css/transfer.css';
import SiteNavbar from '../views/sitenavbar.js';

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
						<button id="scheduleTransferBtn">Schedule Transfers</button>
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
						<button id="cancelTransferBtn">Cancel</button>
					</form>
				</div>
			</div>
		)
	}
	
}