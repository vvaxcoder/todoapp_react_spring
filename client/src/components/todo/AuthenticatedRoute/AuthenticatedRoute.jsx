import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";

import AuthenticationService from '../AuthenticationService.js';

export default class AuthenticatedRoute extends Component {
    render() {
        const { props } = this;

        if (AuthenticationService.isLogggedIn()) {
            return <Route {...props} />
        }
        else {
            return <Redirect to="/login" />
        }
    }
};
