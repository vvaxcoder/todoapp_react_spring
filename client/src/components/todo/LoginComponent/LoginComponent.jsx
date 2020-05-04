import React, {Component} from 'react';

import AuthenticationService from "../AuthenticationService";
import ShowInvalidTitle from "../ShowInvalidTitle/ShowInvalidTitle.jsx";
import ShowSuccessTitle from "../ShowSuccessTitle/ShowSuccessTitle.jsx";

export default class LoginComponent extends Component {
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
};
