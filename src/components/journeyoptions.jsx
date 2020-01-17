import React from "react";
import { Link } from "react-router-dom";
import { userService } from "../services/authentication.service";
import "./journeyoptions.css";

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
    fetch("https://project-greenprint-backend.herokuapp.com/travel/record", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(body => {
        if (body.success === true) {
          this.setState({
            message: "Successfully added to your dashboard"
          });
          setTimeout(() => {
            this.setState({
              message: ""
            });
          }, 6000);
        }
      });
  };

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const isLoggedIn = userService.loggedIn();

    return (
      <div className="journey-options">
        <div>
          <table
            className="ui celled striped table"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold", fontSize: 20 }}>
                  {this.Capitalize(this.props.results.mode)}
                </td>
                <td>
                  Carbon:{" "}
                  <span style={{ fontWeight: "bold", fontSize: 40 }}>
                    {this.props.results.carbon}
                  </span>{" "}
                  kg
                </td>
                <td>Time: {this.props.results.travel_time}</td>
                <td>Distance: {this.props.results.distance} miles</td>
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
                    style={{ color: "blue" }}
                  >
                    Open with Google Maps
                  </a>
                </td>
                <td>
                  {isLoggedIn ? (
                    this.state.message !== "" ? (
                      <div role="alert">{this.state.message}</div>
                    ) : (
                      <a
                        onClick={this.saveJourneyToDB}
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        Save journey
                      </a>
                    )
                  ) : (
                    <div />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="map-responsive">
          <iframe
            title="map"
            width="800"
            height="200"
            frameBorder="1"
            style={{ border: 0 }}
            src={decodeURIComponent(this.props.results.url)}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default JourneyOptions;
