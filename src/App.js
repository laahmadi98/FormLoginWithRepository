import React, { Component } from 'react';
import Login from "./components/login";
import Register from "./components/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import "./style/default.css";
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Router>  
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
    );
  }
}

export default App;