import React from 'react';

class JourneyOptions extends React.Component {
  render() {
    return (
      <div>
        <tr>
            <td>{this.props.journeys}</td>
            <td>{this.props.time}</td>
            <td>{this.props.distance}</td>
            <td>{this.props.carbon}</td>
        </tr>
      </div>
    );
  }
}

export default JourneyOptions;
