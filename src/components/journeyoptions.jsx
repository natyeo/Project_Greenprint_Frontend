import React from "react";
import { Link } from "react-router-dom";
import { userService } from "../services/authentication.service";

class JourneyOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
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
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/travel/record",
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
        if (body.success === true) {
          this.setState({
            message: "Successfully added to your dashboard"
          });
        }
      });
  };

  render() {
    const isLoggedIn = userService.loggedIn();

    return (
      <tr>
        <td>{this.props.results.mode}</td>
        <td>{this.props.results.travel_time}</td>
        <td>{this.props.results.distance} miles.</td>
        <td>{this.props.results.carbon}kg of Carbon.</td>
        <td>
          <a
            id={this.props.results.mode}
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://www.google.com/maps/dir/?api=1&origin=" +
              this.props.from +
              "&destination=" +
              this.props.to +
              "&travelmode=" +
              this.props.results.mode
            }
          >
            Open with Google Maps
          </a>
        </td>
        <td>
          {isLoggedIn ? (
            this.state.message !== "" ? (
              <div role="alert">{this.state.message}</div>
            ) : (
              <button onClick={this.saveJourneyToDB}>Save journey</button>
            )
          ) : (
            <Link to="/login">Save journey</Link>
          )}
        </td>
      </tr>
    );
  }
}

export default JourneyOptions;
