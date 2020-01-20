import React, { Component } from "react";
import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      message: ""
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
    myHeaders.append("Access-Control-Allow-Origin", "*");
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch(
      "https://project-greenprint-backend.herokuapp.com/user/register",
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        this.setState({
          message: ""
        });
        if (
          result.password === "Password must be at least 6 characters" ||
          result.password2 === "Passwords must match"
        ) {
          this.setState({
            message: "Passwords must match and be at least 6 characters"
          });
        } else if (result.email === "Email already exists") {
          this.setState({
            message: "Email already exists"
          });
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(error => console.log("error", error));
  };

  render() {
    const { name, email, password, password2, message } = this.state;
    return (
      <div className="box-grouping">
        <form onSubmit={this.onSubmit} className="ui form">
          <h2>Register</h2>
          {message !== "" && <div role="alert">{message}</div>}
          <div className="form-grouping">
            <label>Username     
              <input
                type="text"
                placeholder="User Name"
                name="name"
                value={name}
                onChange={this.onChange}
                required
              />
            </label>
          </div>
          <div className="form-grouping">
            <label>Email     
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
            <label>Password confirmation   
              <input
                type="password"
                placeholder="Repeat Your Password"
                name="password2"
                value={password2}
                onChange={this.onChange}
                required
              />
            </label>
          </div>
          <div className="form-grouping">
            <button type="submit" className="ui button">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
