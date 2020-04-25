import React, { Component } from "react";

import "./style.scss";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <div className='todo-app'>
          <LoginComponent />
        </div>
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handlerChange = event => {
    console.log(event.target.value);
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

  render() {
    const {
      state,
    //   handlerUsernameChange,
    //   handlerPasswordChange,
      handlerChange
    } = this;

    return (
      <div className='login-wrapper'>
        User Name:
        <input
          type='text'
          name='username'
          value={state.username}
          //   onChange={handlerUsernameChange}
          onChange={handlerChange}
        />
        Password:
        <input
          type='password'
          name={state.password}
          // onChange={handlerPasswordChange}
          onChange={handlerChange}
        />
        <button className='btn'>Login</button>
      </div>
    );
  }
}

export default TodoApp;
