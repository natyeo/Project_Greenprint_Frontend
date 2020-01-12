import React, { Component } from "react";
import ReactDOM from "react-dom";
// import axios from "axios";
import { Link } from "react-router-dom";
// import "./Login.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  render() {
    const { username, email, password, password2 } = this.state;
    return (
      <div class="container">
        <form onSubmit={this.onSubmit}>
          <h2>Register</h2>

          <label>Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="User Name"
            name="username"
            value={username}
            onChange={this.onChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={this.onChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            required
          />

          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
