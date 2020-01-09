import React from 'react';
import JourneyOptions from './journeyoptions';

class JourneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      options: false
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  apiCall() {
    const data = {from: this.state.from , to: this.state.to}
    return fetch('https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      .then((data) =>  data.json())
      .then((body) => {
        this.setState({
          options: body.results
        });
        console.log(body)
        return body
      })
    }

  handleSubmit = (event) => {
    this.apiCall();
    event.preventDefault();
  }

  journeyOptionsList() {
    return this.state.options.map(function(i){
      return <JourneyOptions key={i}/>
    })
  }

  render() {
    if (!this.state.options) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              From:
              <input name="from" type="text" value={this.state.from} onChange={this.handleChange} />
            </label>
            <label>
              To:
              <input name="to" type="text" value={this.state.to} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
      } else {
      return (
        <div>
            <h2>Your options:</h2>
            <table className="table">
              <thead>
                  <tr>
                    <th>Mode</th>
                    <th>Travel time</th>
                    <th>Distance</th>
                    <th>Carbon</th>
                  </tr>
              </thead>
              <tbody>
                {this.journeyOptionsList() }
                {/* <JourneyOptions journeys ={this.state.options[0].mode} ime ={this.state.options[0].travel_time} distance ={this.state.options[0].distance} tcarbon ={this.state.options[0].carbon} /><button>Select</button> */}
              </tbody>
            </table>
        </div>
      );
    }
  }
}

export default JourneyForm;
