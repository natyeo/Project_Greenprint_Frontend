import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from "../services/authentication.service";
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      isLoggedIn: false
    };
  }

  checkLoggedIn = () => {
    if (userService.loggedIn()) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
    this.props.callbackFromParent(this.state.isLoggedIn);
  };

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };

    fetch(
      "https://project-greenprint-backend.herokuapp.com/user/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then(data => data.json())
      .then(body => {
        if (
          body.emailnotfound === "Email not found" ||
          body.passwordincorrect === "Password incorrect"
        ) {
          this.setState({
            message: "Email or password incorrect, please try again"
          });
        } else {
          userService.setToken(body.token);
          this.checkLoggedIn();
          this.props.history.push("/");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { email, password, message } = this.state;
    return (
      <div className="grouping">
        <form onSubmit={this.onSubmit} className="ui form">
          <h2>Please sign in</h2>
            {message !== "" && <div role="alert">{message}</div>}
          <div className="form-grouping">
            <label>Email address
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={email}
                onChange={this.onChange}
                required
              />
            </label>
          </div>
          <div className="form-grouping">
            <label>Password
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
                required
              />
            </label>
          </div>
          <div className="form-grouping">
            <button className="ui button" type="submit">Login</button>
          </div>
          <div className="form-grouping"> 
            <p>
              Not a member?{" "}
              <Link to="/register">
                <span aria-hidden="true"></span> Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
