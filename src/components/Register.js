import React, { Component } from "react";
import ReactDOM from "react-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch(
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/user/register",
      requestOptions
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
    // .then(result => {
    //   this.props.history.push("/");
    // });
  };

  render() {
    const { name, email, password, password2 } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h2>Register</h2>

          <label>Username</label>
          <input
            type="text"
            placeholder="User Name"
            name="name"
            value={name}
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
