import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./style.scss";

class TodoApp extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className='todo-app'>
          <Switch>
            <Route path='/' exact component={LoginComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/welcome' component={WelcomeComponent} />
            <Route component={ErrorComponent} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

class ErrorComponent extends Component {
  render() {
    return (
      <div>
        Error has occured.
      </div>
    );
  }
}


class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
  }

  handlerChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //   handlerUsernameChange = event => {
  //     console.log(event.target.value);
  //     this.setState({
  //       username: event.target.value
  //     });
  //   };

  //   handlerPasswordChange = event => {
  //     console.log(event.target.value);
  //     this.setState({
  //       password: event.target.value
  //     });
  //   };

  loginHandler = () => {
    if (this.state.username === "test" && this.state.password === "dummy") {
      this.props.history.push('/welcome');
      this.setState({ showSuccessMessage: true, hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false, hasLoginFailed: true });
    }
  };

  render() {
    const {
      state,
      //   handlerUsernameChange,
      //   handlerPasswordChange,
      handlerChange,
      loginHandler
    } = this;

    return (
      <div className='login-wrapper'>
        <ShowInvalidTitle hasLoginFailed={state.hasLoginFailed} />
        
        <ShowSuccessTitle showSuccessMessage={state.showSuccessMessage} />

        <div className='username'>
          Username:
          <input
            type='text'
            name='username'
            value={state.username}
            //   onChange={handlerUsernameChange}
            onChange={handlerChange}
          />
        </div>
        <div className='password'>
          Password:
          <input
            type='password'
            name='password'
            value={state.password}
            // onChange={handlerPasswordChange}
            onChange={handlerChange}
          />
        </div>
        <button className='btn' onClick={loginHandler}>
          Login
        </button>
      </div>
    );
  }
}

const ShowInvalidTitle = ({ hasLoginFailed }) => {
  if (hasLoginFailed) {
    return <div className='wrong'>Invalid Credentials</div>;
  }

  return null;
};

const ShowSuccessTitle = ({ showSuccessMessage }) => {
  if (showSuccessMessage) {
    return <div className='success'>Login Successfull</div>;
  }

  return null;
};

export default TodoApp;
