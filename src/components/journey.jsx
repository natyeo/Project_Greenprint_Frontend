import React from 'react';
import JourneyOptions from './journeyoptions';

class JourneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: ''
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
    const data = this.state
    fetch('https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    }).then((promise) => promise.json())
    .then((APIresponse) => {
      this.props.options(APIresponse)
  })
}

  handleSubmit = (event) => {
    this.apiCall();
    event.preventDefault();
  }

  render() {
    return (
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
    );
  }
}

export default JourneyForm;
