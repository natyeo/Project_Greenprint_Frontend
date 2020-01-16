import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../services/authentication.service';

class JourneyOptionsFlying extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  saveJourneyToDB = () => {
    const id = userService.decodeTokenGetId();
    const data = {
      mode: this.props.results.mode,
      distance: this.props.results.distance,
      carbon: this.props.results.carbon,
      user: [id]
    };
    fetch(
      "https://project-greenprint-backend.herokuapp.com/travel/record",
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
      if (body.success === true) {
        this.setState({
          message: "Successfully added to your dashboard"
        });
      }
    });
  };

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const isLoggedIn = userService.loggedIn();

    return (
      <div style={{ border: '2px solid #3a4b35', margin: '0.2rem' }}>
      <div>
      <table
      className="ui celled striped table"
      style={{ display: 'flex',  justifyContent:'center', alignItems:'center', textAlign: "center" }}
      >
      <tbody>
      <tr>
      <td style={{ fontWeight: 'bold', fontSize: 20 }} >{this.Capitalize(this.props.results.mode)}</td>
      <td>from: {this.props.results.origin} <br></br>to: {this.props.results.destination}</td>
      <td>Carbon: <br></br><span style={{ fontWeight: 'bold', fontSize: 30, color: 'red' }} >{this.props.results.carbon}</span> kg</td>
      <td>Distance: {this.props.results.distance} miles</td>
      <td>This journey is equivalent to <span style={{ fontWeight: 'bold', color: 'red'}}>{this.props.results.barrels_of_oil}</span> barrels of petrol.</td>
      <td>
      {isLoggedIn ? (
        this.state.message !== "" ? (
          <div role="alert">{this.state.message}</div>
        ) : (
          <a onClick={this.saveJourneyToDB} style={{cursor: 'pointer', color: 'blue' }}>Save journey</a>
        )
      ) : (
        <div />
      )}
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    )
  }
}

export default JourneyOptionsFlying
