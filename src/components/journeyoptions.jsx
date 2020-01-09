import React from 'react';

class JourneyOptions extends React.Component {
  render() {
    return (
        <tr>
            <td>{this.props.results.mode}</td>
            <td>{this.props.results.travel_time}</td>
            <td>{this.props.results.distance}</td>
            <td>{this.props.results.carbon}</td>
            <td><button id={this.props.results.mode}>Select</button></td>
        </tr>
    );
  }
}

export default JourneyOptions;
