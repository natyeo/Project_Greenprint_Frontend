import React from 'react';

class JourneyOptions extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                These are your options:
                {this.props.journey}
             </div>
        );
    }
}

export default JourneyOptions;
