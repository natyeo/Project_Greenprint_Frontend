import React from 'react';

class JourneyOptions extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        These are your options: {this.props.journeys}
      </div>
    );
  }
}

export default JourneyOptions;
