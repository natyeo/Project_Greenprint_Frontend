import React, { Component } from "react";
import ReactDOM from "react-dom";

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

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    //
    fetch(
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/user/register",
      // "https://cors-anywhere.herokuapp.com/http://localhost:5678/travel/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
      }
    );
    // .then(result => {
    //   this.props.history.push("/");
    // });
  };

  render() {
    const { username, email, password, password2 } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Register</h2>

          <label>Username</label>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={username}
            onChange={this.onChange}
            required
          />
          <br />
          <label>Email</label>
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
          <label>Password</label>
          <input
            type="password"
            placeholder="Repeat Your Password"
            name="password2"
            value={password2}
            onChange={this.onChange}
            required
          />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
