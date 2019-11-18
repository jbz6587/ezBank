import React, { Component } from 'react';
import LandingNavbar from '../views/landingnavbar.js';
import '../css/confirmdeposit.css';


export default class ConfirmDeposit extends Component {
	
	componentDidMount() {
		setTimeout(function(){
			window.location.href = "./home";
		}, 5000);
	}
	
	render() {
		return(
			<div class="DepositComplete">
				<div>
					<LandingNavbar/>
				</div>
				<div>
					<h2>Deposit Successful!</h2>
				</div>
				<div>
					<h3>Your check deposit has been processed successfully.</h3>
					<h3>You will be returned to the home page in a few seconds.</h3>
				</div>
			</div>
		)

	}

}