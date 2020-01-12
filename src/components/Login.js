import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
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
