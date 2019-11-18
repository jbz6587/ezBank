import React, { Component } from 'react';
import '../css/home.css';
import SiteNavbar from '../views/sitenavbar.js';

export default class Home extends Component {
	constructor(props) {
	        super(props)
	      this.state = {
	          user : "Joe Schmoe",
	          accounts : {
	          	account1 : { type : 'Checkings', balance : '3,000', accountid : '6513219447', 
	          					accNickName : 'Pay the bills', details: 'hide', routing : '813485762'},
	          	account2 : { type : 'Savings', balance : '420,000', accountid : '6567218975',
	          				 accNickName : 'Rainy Day Fund', details: 'hide', routing : '812687429'}
	          }
	      };
	      this.showDetails1 = this.showDetails1.bind(this);
	      this.showDetails2 = this.showDetails2.bind(this);
	}

	showDetails1(){
		if(this.state.accounts.account1.details === 'hide'){
			let statusCopy = Object.assign({}, this.state);
			statusCopy.accounts['account1'].details = 'show';
			this.setState(statusCopy);
		}else{
			let statusCopy = Object.assign({}, this.state);
			statusCopy.accounts['account1'].details = 'hide';
			this.setState(statusCopy);
		}
	}

	showDetails2(){
		if(this.state.accounts.account2.details === 'hide'){
			let statusCopy = Object.assign({}, this.state);
			statusCopy.accounts['account2'].details = 'show';
			this.setState(statusCopy);
		}else{
			let statusCopy = Object.assign({}, this.state);
			statusCopy.accounts['account2'].details = 'hide';
			this.setState(statusCopy);
		}
	}

	render() {
	return(
		<div className='Home'>
			<SiteNavbar/>
		<h1>Welcome {this.state.user}</h1>
		<hr/>
		<h2 id="accountsTitle">Accounts:</h2>
		<div id="accountDiv" className="block">
			<h3 id="accountTitle"> {this.state.accounts.account1.type} Account</h3>
			<div>
				<h4>Account : {this.state.accounts.account1.accNickName}</h4>
				Avaliable Balance : ${this.state.accounts.account1.balance}<br/>
				<br/>
				<button type="button" onClick={this.showDetails1}>Details</button>


				{this.state.accounts.account1.details === 'show' &&
					<div>
						<br/>
						<b>Account Number :</b> {this.state.accounts.account1.accountid}<br/>
						<b>Routing Number :</b> {this.state.accounts.account1.routing}<br/><br/>
						<strong>Recent Transactions</strong><br/>
						<font color="red">-$35.87</font> SUNOCO GAS STATION<br/>
						<font color="red">-$65.23</font> STEAM TRANSACTION<br/>
						<font color="green">+$100.00</font> WALMART REFUND DEPT.<br/>
						<br/>
					</div>
				}
			</div>
		</div>
		<div id="accountDiv" className="block">
			<h3 id="accountTitle"> {this.state.accounts.account2.type} Account</h3>
			<div>
				<h4>Account : {this.state.accounts.account2.accNickName}</h4>
				Avaliable Balance : ${this.state.accounts.account2.balance}<br/>
				<br/>
				<button type="button" onClick={this.showDetails2}>Details</button>

				{this.state.accounts.account2.details === 'show' &&
					<div>
						<br/>
						<b>Account Number :</b> {this.state.accounts.account2.accountid}<br/>
						<b>Routing Number :</b> {this.state.accounts.account2.routing}<br/><br/>
						<strong>Recent Transactions</strong><br/>
						<font color="red">-$350.87</font> Suprise Doctors Visit<br/>
						<font color="green">+$2456.36</font> DIRECT DEPOSIT 11/04/2019<br/>
						<font color="green">+$2694.57</font> DIRECT DEPOSIT 11/11/2019<br/>
						<br/>
					</div>
				}

			</div>
		</div>
		</div>
		)
	}
}