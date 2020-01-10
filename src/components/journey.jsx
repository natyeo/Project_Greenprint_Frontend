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
    // remember to change the route below for production
    return fetch('https://cors-anywhere.herokuapp.com/https://project-greenprint-backend.herokuapp.com/test-route', {
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
        return body
      })
    }

  handleSubmit = (event) => {
    this.apiCall();
    event.preventDefault();
  }

  journeyOptionsList() {
    const startPoint = this.state.from
    const endPoint = this.state.to
    return this.state.options.map(function(elem, i){
      return <JourneyOptions results={elem} key={i} from={startPoint} to={endPoint}/>
    })
  }

  render() {
    return (
      <div>
        <div>
          <h3>Enter your start and end location:</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              From:
              <input name="from" type="text" value={this.state.from} onChange={this.handleChange} />
            </label>
            <label>
              To:
              <input name="to" type="text" value={this.state.to} onChange={this.handleChange} />
            </label>
            <input className="ui button" type="submit" value="Submit" />
          </form>
        </div>

        { this.state.options ?

          <div>
              <h3>Your travel options:</h3>
              <table className="ui celled table" style={{textAlign: "center"}} >
                <thead>
                    <tr>
                      <th>Mode</th>
                      <th>Travel time</th>
                      <th>Distance (in miles)</th>
                      <th>Carbon (in kg)</th>
                      <th></th>
                    </tr>
                </thead>
                <tbody>
                  {this.journeyOptionsList() }
                </tbody>
              </table>
          </div> :
          <> </>
        }
      </div>
    )
  }
}

export default JourneyForm;
