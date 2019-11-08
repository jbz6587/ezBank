import React, { Component } from 'react';
import App from '.././App.js'
import '../css/home.css';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';


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
		<div>
			<Navbar bg="dark" variant="dark">
	   		<Navbar.Brand href="/">eZ-Bank</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
	    	<Navbar.Collapse id="basic-navbar-nav">
		    	<Nav className="mr-auto">
		    		<Nav.Link href="/">Home</Nav.Link>
		    		<Nav.Link href="/transfer">Transfer</Nav.Link>
		    		<Nav.Link href="/deposit">Deposit</Nav.Link>
		    		<Nav.Link href="/help">Help</Nav.Link>
		    		<Nav.Link href="/profile">Profile/Settings</Nav.Link>
		    	</Nav>
	    	</Navbar.Collapse>
	    	</Navbar>
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