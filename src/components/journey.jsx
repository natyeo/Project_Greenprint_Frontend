import React from 'react';

class JourneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('An address was submitted: ' + this.state.from + ' to ' + this.state.to);
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
