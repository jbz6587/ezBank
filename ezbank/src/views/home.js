import React, { Component } from 'react';
import '../css/home.css';
import SiteNavbar from '../views/sitenavbar.js';

export default class Home extends Component {
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
		<div className='Home'>
			<SiteNavbar/>
		<h1>Welcome {this.state.user}</h1>
		<hr/>
		<h2 id="accountsTitle">Accounts:</h2>
		<div id="accountDiv" className="block">
			<h3 id="accountTitle"> {this.state.accounts.account1.type}</h3>
			<div>
				<h4>Account : {this.state.accounts.account1.accNickName}</h4>
				Avaliable Balance : ${this.state.accounts.account1.balance}
				<br/>
				<button type="button">View Details</button>
			</div>
		</div>
		<div id="accountDiv" className="block">
			<h3 id="accountTitle"> {this.state.accounts.account2.type} Account  Account Balance : ${this.state.accounts.account2.balance}</h3>
			<div>
				<h4>Account : {this.state.accounts.account2.accNickName}</h4>
				Avaliable Balance : ${this.state.accounts.account2.balance}
				<br/>
				<button type="button">View Details</button>
			</div>
		</div>
		</div>
		)
	}
}