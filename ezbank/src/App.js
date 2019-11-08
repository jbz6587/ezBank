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
import PWRecovery from './views/pwrecovery'


function App() {
  return (
	<Router>
		<div className="App">
			<div className='container'>
				<Router>
					<Route exact path="/" component={Login}/>
					<Route path="/pwrecovery" component={PWRecovery}/>
				</Router>
			</div>
		</div>
	</Router>
  );
}

export default App;
