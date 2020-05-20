import React from 'react';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import './App.css';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <Link to = "/login">Login</Link>
      <Link to = "/FriendsList">FriendsList</Link>

        <Switch>
          <PrivateRoute exact path ="/FriendsList" component={FriendsList} />
          <Route path = "/login" component={Login} />
        </Switch>
     
    </Router>
  );
}

export default App;
