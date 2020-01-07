import React from 'react';
import './App.css';
import Welcome from './components/welcome.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <body>
        <div>
          <Welcome name="Sara" />
          </div>
      </body>
    </div>
  );
}

export default App;
