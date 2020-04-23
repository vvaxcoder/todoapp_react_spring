import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <div className="todo-app">
                    <LoginComponent />
                </div>
            </div>
        );
    }
}

class LoginComponent extends Component {
    render() {
        return (
            <div>
                User Name:
                <input type="text" name="username" />
                Password: <input type="password" name="password" />
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp;
