import React, { Component } from 'react';
import '../css/transfer.css';
import {Link} from 'react-router-dom';
import SiteNavbar from '../views/sitenavbar.js';
import Scheduler from '../views/scheduler.js';
import swal from 'sweetalert';

export default class Transfer extends Component {
	
	constructor(props) {
		super(props)
	    this.state = {
			user : "Joe Schmoe",
	        accounts : {
				account1 : { type : 'Checkings', balance : '3,000', accountid : '6513219447', accNickName : 'Pay the bills'},
	          	account2 : { type : 'Savings', balance : '420,000', accountid : '6567218975', accNickName : 'Rainy Day Fund'}
	        },
	        fromAccount : "",
	        toAccount : "",
	        amount : 0
	    };
	    this.handleFromAccountChange = this.handleFromAccountChange.bind(this);
	    this.handleToAccountChange = this.handleToAccountChange.bind(this);
	    this.handleAmountChange = this.handleAmountChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
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

	handleFromAccountChange(event){
		this.setState({fromAccount: event.target.value});
	}

	handleToAccountChange(event){
		this.setState({toAccount: event.target.value});
	}

	handleAmountChange(event){
		this.setState({amount: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		var from = this.state.fromAccount;
		var to = this.state.toAccount;
		var amnt = parseFloat(this.state.amount);
		
		var errorMessage = "";
		
		
		
		if (from === ""){
			errorMessage += "You have not selected a 'From' account.\n";
		}
		if (to === "") {
			errorMessage += "You have not selected a 'To' account.\n";
		}
		
		if(from !== "" && to !== ""){
			from = parseFloat(this.state.fromAccount);
			to = parseFloat(this.state.toAccount);
			
			if (from === to){
				errorMessage += "The accounts you are transferring from and to cannot be the same.\n";
			}
			if (amnt > from){
				errorMessage += "The account you are trying to transfer from does not have sufficient funds to transfer the amount specified.\n";
			}
		}
		
		
		if (errorMessage === "") {
			swal({
				title: "Success",
				text: "Transfer was successful!\n You will be redirected to the homepage in a moment.",
				icon: "success",
				timer: 3000,
				buttons: false
			}).then(() => {
					window.location.href = "./home";
				}
			);
		}
		else {
			var errorDiv = document.getElementById("TransferErrorDiv");
			errorDiv.innerText = errorMessage;
			errorDiv.style.color = "red";
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
					<div id="TransferErrorDiv"></div>
					<div>
						<b><u>Select Accounts:</u></b>
						<button id="scheduleTransferBtn" onClick={this.toggleSchedulerDialog}>Schedule Transfers</button>
					</div>
					<br/>
					<form id="transferForm" onSubmit={this.handleSubmit}>
						<label>From:</label>
						<br/>
						<select id="transferFromAcctSel" className="transferFormElement" onChange={this.handleFromAccountChange}>
							<option value="">-- Select Account --</option>
							<option value='3000.00'>Pay the bills - $3,000</option>
							<option value='420000.00'>Rainy Day Fund - $420,000</option>
						</select>
						<br/><br/>
						<label>To:</label>
						<br/>
						<select id="transferToAcctSel" className="transferFormElement" onChange={this.handleToAccountChange}>
							<option value="">-- Select Account --</option>
							<option value='3000.00'>Pay the bills - $3,000</option>
							<option value='420000.00'>Rainy Day Fund - $420,000</option>
						</select>
						<br/><br/>
						<label>Amount:</label>
						<br/>
						<input id="transferAmt" className="transferFormElement" type="number" step="0.01" min="0.00" onChange={this.handleAmountChange} required></input>
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