import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </header>
      
    </div>
    </Router>
  );
}

export default App;
