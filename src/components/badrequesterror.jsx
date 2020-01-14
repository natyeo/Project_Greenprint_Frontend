import React from "react";

class BadRequestError extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.error}</td>
        <td>{this.props.description}</td>
      </tr>
    );
  }
}

export default BadRequestError;
