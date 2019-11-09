import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  ButtonToobar,
  Navbar,
  Nav,
  Form,
  FormControl,
  Modal,
  Badge
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  History,
  Link
} from 'react-router-dom';

import Login from './views/login';
import Home from './views/home';
import Contact from './views/contact';
import Register from './views/register';
import PWRecovery from './views/pwrecovery';
import Deposit from './views/deposit';


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
          <Route path="/deposit" component={Deposit}/>
				</Router>
			</div>
		</div>
	</Router>
  );
}

export default App;
