import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import { userService } from "../../services/authentication.service";

class Navbar extends Component {

  logout = () => {
    userService.logout();
    window.location.reload();
  };

  render() {
    var isLoggedIn = userService.loggedIn();
    return (
      <nav className="ui large secondary menu">
        <div className="left item">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="right item">
          {userService.loggedIn() ? (
            <li className="item">
              <Link to="/" onClick={this.logout}>
                Sign Out
              </Link>
            </li>
          ) : (
            <div>
              <li className="item">
                <Link to={"/login"}>Sign In</Link>
              </li>
              <li className="item">
                <Link to="/register">Sign Up</Link>
              </li>
            </div>

          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
