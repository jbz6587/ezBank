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
  Browser as Router,
  Switch,
  Route,
  History,
  Link
} from 'react-router-dom';

import Login from './views/login';
import Home from './views/home';
import Contact from './views/contact';
import Register from './views/register';


function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
