import React from 'react';

class JourneyOptions extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        Journey type: {this.props.journeys} <br></br>
        travel time: {this.props.time}<br></br>
        distance: {this.props.distance}<br></br>
        carbon: {this.props.carbon}<br></br>
      </div>
    );
  }
}

export default JourneyOptions;
