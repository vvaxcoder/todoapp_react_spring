import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
      <div>
        Welcome {this.props.match.params.name}. You can manage it{" "}
        <Link to='/todos'>here.</Link>
      </div>
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
      <div>
        <hr/> Footer
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

        <table>
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
