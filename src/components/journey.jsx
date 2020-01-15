import React from "react";
import JourneyOptions from "./journeyoptions";
import JourneyOptionsFlying from "./flightoptions";
import "./journey.css";
import Modal from "./Modal/Modal";
import Welcome from "./welcome.jsx";
import BadRequestError from "./badrequesterror.jsx";

class JourneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      options: false,
      loading: false,
      loading_error: false,
      flying_from: "",
      flying_to: ""
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
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/",
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
      this.setState({
        options: body,
        loading: false
      });
      return body;
    })
  }

  apiCallFlying() {
    const data = { from: this.state.flying_from, to: this.state.flying_to };
    return fetch(
      "https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/flights",
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
      this.setState({
        options: body,
        loading: false
      });
      return body;
    })
  }

  handleSubmit = event => {
    this.apiCall();
    this.setState({ loading: true });
    event.preventDefault();
  };

  handleSubmitFlying = event => {
    this.apiCallFlying();
    this.setState({ loading: true });
    event.preventDefault();
  }

  journeyOptionsList() {
    const startPoint = this.state.from;
    const endPoint = this.state.to;
    if (this.state.options.error) {
      return(<BadRequestError error={this.state.options.error} description={this.state.options.description}/>)
    }
    return this.state.options.map(function(elem, i) {
      return (
        <JourneyOptions
        results={elem}
        key={i}
        from={startPoint}
        to={endPoint}
        />
      );
    });
  }

  journeyOptionsListFlying() {
    const startPoint = this.state.flying_from;
    const endPoint = this.state.flying_to;
    const object = this.state.options
    if (this.state.options.error) {
      return(<BadRequestError error={this.state.options.error} description={this.state.options.description}/>)
    }
    return (
      <JourneyOptionsFlying
      results={object}
      from={startPoint}
      to={endPoint}
      />
    );
}

render() {
  return (
    <div>
    <div>
    <Welcome name="there" />
    </div>

    <h2>Carbon Calculator</h2>
    <div className="grouping">
    <h3>Ground Transport</h3>
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

    <h3>Flights</h3>
    <form onSubmit={this.handleSubmitFlying} className="ui form">
    <div>
    <label>
    <span className="bold">Origin Aiport</span>
    <input
    name="flying_from"
    type="text"
    value={this.state.flying_from}
    onChange={this.handleChange}
    />
    </label>
    </div>
    <div>
    <label>
    <span className="bold">Destination Airport</span>
    <input
    name="flying_to"
    type="text"
    value={this.state.flying_to}
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
      <div className="grouping_results">
      <h2>Your travel results</h2>
      <div className="grouping_table">
      {this.state.options.mode === "flying" ? (
        this.journeyOptionsListFlying()
      ) : (
        this.journeyOptionsList()
      )}
      </div>
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
