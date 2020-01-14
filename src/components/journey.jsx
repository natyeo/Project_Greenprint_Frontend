import React from "react";
import JourneyOptions from "./journeyoptions";
import "./journey.css";
import Modal from "./Modal/Modal";
import Welcome from "./welcome.jsx";

class JourneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      options: false,
      loading: false
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  apiCall() {
    const data = { from: this.state.from, to: this.state.to };
    // remember to change the route below for production / TEST
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/",
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
        this.setState({
          options: body,
          loading: false
        });
        return body;
      });
  }

  handleSubmit = event => {
    this.apiCall();
    this.setState({ loading: true });
    event.preventDefault();
  };

  journeyOptionsList() {
    const startPoint = this.state.from;
    const endPoint = this.state.to;

    return this.state.options.map(function(elem, i) {
      return (
          <div>
            <JourneyOptions
              results={elem}
              key={i}
              from={startPoint}
              to={endPoint}
            />
          </div>  
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <Welcome name="there" />
        </div>

        <div className="grouping">
          <h3>Journey Calculation</h3>
          <form onSubmit={this.handleSubmit} className="ui form">
            <div>
              <label>
                <span className="bold">FROM</span>
                <input
                  name="from"
                  type="text"
                  value={this.state.from}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                <span className="bold">TO</span>
                <input
                  name="to"
                  type="text"
                  value={this.state.to}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <input className="ui button" type="submit" value="Submit" />
            </div>
          </form>
        </div>

        {this.state.options ? (
          <div className="grouping results">
            <h3>Your travel results</h3>
            <table
              className="ui celled striped table"
              style={{ textAlign: "center" }}
            >
              <tbody>{this.journeyOptionsList()}</tbody>
            </table>
          </div>
        ) : (
          <> </>
        )}
        {this.state.loading ? <Modal /> : <> </>}
      </div>
    );
  }
}

export default JourneyForm;
