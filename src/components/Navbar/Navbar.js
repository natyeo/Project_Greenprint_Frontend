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
          <li className="item bold">
            <Link to="/">HOME</Link>
          </li>
        </div>
        
        {this.props.isLoggedIn ? (
            <div className="right item">
              <li className="item">
                <Link to="/profile">DASHBOARD</Link>
              </li>
              <li className="item">
                <span onClick={this.logout}>SIGN OUT</span>
              </li>
            </div>
          ) : (
            <div className="right item">
              <li className="item">
                <Link to={"/login"}>SIGN IN</Link>
              </li>
              <li className="item">
                <Link to="/register">SIGN UP</Link>
              </li>
            </div>
          )}   
      </nav>
    );
  }
}

export default Navbar;
