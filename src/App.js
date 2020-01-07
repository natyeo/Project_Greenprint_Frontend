import React from 'react';
import './App.css';
import Welcome from './components/welcome.jsx';
import JourneyForm from './components/journey.jsx';
import JourneyOptions from './components/journeyoptions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  getOptions = (data) => {
    this.setState ({
      from: data.from,
      to: data.to
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <body>
          <Welcome name="Sara" />
            <div>
            <JourneyForm options={this.getOptions}/>
            </div>
            <JourneyOptions journey={this.state.to}/>
        </body>
      </div>
    );
  }
}

export default App;
