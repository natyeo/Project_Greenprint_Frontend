import React from 'react';
import './App.css';
import Welcome from './components/welcome.jsx';
import JourneyForm from './components/journey.jsx';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <body>
          <Welcome name="Sara" />
            <div>
            <JourneyForm />
            </div>
        </body>
      </div>
    );
  }
}

export default App;
