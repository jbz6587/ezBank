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

import Login from './views/login'
import Home from './views/home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
