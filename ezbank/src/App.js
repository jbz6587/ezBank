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
				</Router>
			</div>
		</div>
	</Router>
  );
}

export default App;
