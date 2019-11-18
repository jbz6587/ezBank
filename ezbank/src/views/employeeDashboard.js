import React, { Component } from 'react';
import '../css/employeeDashboard.css';
import SiteNavbar from '../views/sitenavbar.js';
import MUIDataTable from "mui-datatables";

export default class EmployeeDashboard extends Component {

	constructor(props){
		super(props);
		this.state = {
			helpTickets : [["Joe","Schmoe", "420843218","Unread","Incomplete"],
							["Billy", "Bob", "123456789", "Read", "Complete"],
							["Mary", "Smith", "852486972", "Read", "Incomplete"],
							["Sarah", "Lee", "587412365", "Unread", "Incomplete"]]
		}
	}

	render(){
		return(
			<div>
			<SiteNavbar/>
				<h2>Employee Dashboard</h2>
				View and search Help Request Tickets or Account Tickets here.
				<div id="helpTicketDiv">
					<MUIDataTable
					title={"Help Tickets"}
					columns={["First Name","Last Name", "Account Number", "Opened Status", "Completion Status"]}
					data={this.state.helpTickets}
					options={{responsive: "scrollMaxHeight"}}
					/>
				</div>
				<br/>
				<br/>
				<div id="accountTicketDiv">
					<MUIDataTable
					title={"Account Tickets"}
					columns={["First Name","Last Name", "Account Number", "Opened Status", "Completion Status"]}
					data={this.state.helpTickets}
					options={{responsive: "scrollMaxHeight"}}
					/>
				</div>
			</div>
		)
	}

}