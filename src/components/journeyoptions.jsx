import React from 'react';

class JourneyOptions extends React.Component {
  render() {
    return (
        <tr>
            <td>{this.props.results.mode}</td>
            <td>{this.props.results.travel_time}</td>
            <td>{this.props.results.distance}</td>
            <td>{this.props.results.carbon}</td>
            <td><a id={this.props.results.mode} target="_blank" href={"https://www.google.com/maps/dir/?api=1&origin=" + this.props.from + "&destination=" + this.props.to + "&travelmode=" + this.props.results.mode}>Open with Google Maps</a></td>
        </tr>
    );
  }
}

export default JourneyOptions;
