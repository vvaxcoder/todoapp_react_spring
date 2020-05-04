import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.scss";

import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute/AuthenticatedRoute.jsx';

import WelcomeComponent from './WelcomeComponent/WelcomeComponent.jsx';
import HeaderComponent from './HeaderComponent/HeaderComponent.jsx';
import FooterComponent from './FooterComponent/FooterComponent.jsx';
import LogoutComponent from './LogoutComponent/LogoutComponent.jsx';
import ListTodosComponent from './ListTodosComponent/ListTodosComponent.jsx';
import ErrorComponent from './ErrorComponent/ErrorComponent.jsx';
import LoginComponent from './LoginComponent/LoginComponent.jsx';

class TodoApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='todo-app'>
          <HeaderComponent />
            <Switch>
              <Route path='/' exact component={LoginComponent} />
              <Route path='/login' component={LoginComponent} />
              <AuthenticatedRoute path='/welcome/:name' component={WelcomeComponent} />
              <AuthenticatedRoute path='/todos' component={ListTodosComponent} />
              <AuthenticatedRoute path='/logout' onClick={AuthenticationService.logout} component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </div>
        </div>
      </Router>
    );
  }
}

export default TodoApp;
