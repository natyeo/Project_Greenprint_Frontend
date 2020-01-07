import React from 'react';
import './App.css';
import Welcome from './components/welcome.jsx';
import JourneyForm from './components/journey.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <body>
        <h1><Welcome name="Sara" /></h1>
          <div>
          <JourneyForm />
          </div>

      </body>
    </div>
  );
}

export default App;
