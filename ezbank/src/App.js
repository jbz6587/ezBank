import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './views/login';
import Home from './views/home';
import Contact from './views/contact';
import Register from './views/register';
import PWRecovery from './views/pwrecovery';
import Transfer from './views/transfer';
import Deposit from './views/deposit';
import Help from './views/help';
import ProfileSettings from './views/profilesettings';
import CreateTicket from './views/createsupportticket';
import EmployeeDashboard from './views/employeeDashboard';
import ConfirmRegistration from './views/confirmregistration';


function App() {
  return (
	<Router>
		<div className="App">
			<div className='container'>
				<Router>
					<Route exact path="/" component={Login}/>
					<Route path="/pwrecovery" component={PWRecovery}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/home" component={Home}/>
					<Route path="/register" component={Register}/>
					<Route path="/transfer" component={Transfer}/>
					<Route path="/deposit" component={Deposit}/>
					<Route path="/help" component={Help}/>
          			<Route path="/profilesettings" component={ProfileSettings}/>
					<Route path="/create-support-ticket" component={CreateTicket}/>
					<Route path="/employee-dashboard" component={EmployeeDashboard}/>
					<Route path="/registration-complete" component={ConfirmRegistration}/>
				</Router>
			</div>
		</div>
	</Router>
  );
}

export default App;
