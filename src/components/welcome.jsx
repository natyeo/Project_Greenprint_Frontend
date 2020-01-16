import React from 'react';

function Welcome(props) {
  return (
    <div className="about-app">
      <h1>GreenPrint</h1>
      <p>Hello {props.name}!</p>
      <p>GreenPrint is an app intended to help you calculate and monitor the amount of carbon your travel produces on a per journey basis. If you enter two locations in the form below the app will generate several routes which you can take to your destination, divided by the mode of travel (usually driving, public transport, walking, and cycling). You can also calculate the carbon footprint for air travel.</p>
    </div>
  )
}

export default Welcome;
