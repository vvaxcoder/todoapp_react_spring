import React, {Component} from "react";
import {Link} from "react-router-dom";

import AuthenticationService from "../AuthenticationService";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isLogggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a className="navbar-brand" href="https://bet.newgamesoft.com/">in28minutes</a>
                    </div>

                    <ul className="navbar-nav">
                        <li className="nav-link">
                            {isUserLoggedIn && <Link className="nav-link" to="/welcome">Home</Link>}
                        </li>

                        <li className="nav-link">
                            {isUserLoggedIn && <Link className="nav-link" to="/todos">Todos</Link>}
                        </li>
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link">
                            {!isUserLoggedIn && <Link className="nav-link" to="/login">Login</Link>}
                        </li>

                        <li className="nav-link">
                            {isUserLoggedIn && <Link className="nav-link" to="/login">Logout</Link>}
                        </li>
                    </ul>

                </nav>
            </header>
        );
    }
}

export default HeaderComponent;
