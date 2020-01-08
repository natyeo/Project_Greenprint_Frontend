import React from 'react';
import JourneyOptions from './journeyoptions';

class JourneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      from: '',
      to: '',
      options:{}
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
          loading: false,
          options: body
        });
      })
    }

  handleSubmit = (event) => {
    this.apiCall();
    event.preventDefault();
  }

  render() {
    if (this.state.loading) {
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
          <JourneyOptions journeys ={this.state.options.walking[0].mode}/>
        </div>
      );
    }
  }
}

export default JourneyForm;
