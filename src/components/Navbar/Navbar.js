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
    return (
      <nav className="ui large secondary menu">
        <div className="left item">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="right item">
          {this.props.isLoggedIn ? (
            <div>
              <li className="item">
                <Link to="/profile">Dashboard</Link>
              </li>
              <li className="item">
                <span onClick={this.logout}>Sign Out</span>
              </li>
            </div>
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
