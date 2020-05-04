import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import AuthenticationService from './AuthenticationService';

import "./style.scss";

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
              <Route path='/welcome/:name' component={WelcomeComponent} />
              <Route path='/todos' component={ListTodosComponent} />
              <Route path='/logout' component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </div>
        </div>
      </Router>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <Fragment>
        <h1>Welcome!</h1>

        <div className="container">
          Welcome {this.props.match.params.name}. You can manage it{" "}
          <Link to='/todos'>here.</Link>
        </div>
      </Fragment>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand" href="https://bet.newgamesoft.com/">in28minutes</a>
          </div>

          <ul className="navbar-nav">
            <li className="nav-link">
              <Link className="nav-link" to="/welcome">Home</Link>
            </li>
            <li className="nav-link">
              <Link className="nav-link" to="/todos">Todos</Link>
            </li>
          </ul>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-link">
              <Link className="nav-link" to="/login">Logout</Link>
              </li>
          </ul>

        </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">whatever</span>
      </footer>
    );
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>You are logged out</h1> 

        <div className="container">
          Whatever what is the text right here
        </div>
      </div>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: "Learn Vue",
          done: false,
          targetDate: new Date()
        },
        {
          id: 3,
          description: "Learn Angular",
          done: false,
          targetDate: new Date()
        }
      ]
    };
  }
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>List Todos</h1>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
              </tr>
            </thead>

            <tbody>
              {todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class ErrorComponent extends Component {
  render() {
    return <div>Error has occured.</div>;
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
      AuthenticationService.registerSuccessfullLogin(this.state.username);

      this.props.history.push(`/welcome/${this.state.username}`);

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
        <h1>Login</h1>

        <div className="container">
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
          <button className='btn btn-success' onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

const ShowInvalidTitle = ({ hasLoginFailed }) => {
  if (hasLoginFailed) {
    return <div className='wrong alert alert-warning'>Invalid Credentials</div>;
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
