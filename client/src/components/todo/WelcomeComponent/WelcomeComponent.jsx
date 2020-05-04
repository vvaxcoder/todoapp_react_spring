import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

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

export default WelcomeComponent;

