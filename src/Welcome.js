import { Link } from "@reach/router";
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { userName, logOutUser } = this.props;

    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {userName}
        </span>
        ,
        <Link to="/login" className="font-weight-bold text-primary pl-1"
        logOutUser = {e => logOutUser(e)}>
          Logout
        </Link>
      </div>
    );
  }
}

export default Welcome;
