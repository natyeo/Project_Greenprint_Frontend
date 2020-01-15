import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userService } from "../services/authentication.service";

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
      if(userService.loggedIn()){
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
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/user/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
      }
    )
      .then(data => data.json())
      .then(body => {
        userService.setToken(body.token);
        this.setState({ message: "" });
        this.checkLoggedIn();
        this.props.history.push("/");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: "Login failed. Username or password not match"
          });
        }
      });
  };

  render() {

    const { email, password, message } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {message !== "" && (
            <div class="alert alert-warning alert-dismissible" role="alert">
              {message}
            </div>
          )}

          <h2>Please sign in</h2>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={this.onChange}
            required
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            required
          />
          <br />

          <button type="submit">Login</button>
          <p>
            Not a member?{" "}
            <Link to="/register">
              <span aria-hidden="true"></span> Register here
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
