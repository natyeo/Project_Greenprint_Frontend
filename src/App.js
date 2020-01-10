import React from 'react';
import './App.css';
import Welcome from './components/welcome.jsx';
import JourneyForm from './components/journey.jsx';

class App extends React.Component {

  render(){
    return (
      <div className="App">
          <Welcome name="there" />
            <div>
            <JourneyForm />
            </div>
      </div>
    );
  }
}

export default App;
