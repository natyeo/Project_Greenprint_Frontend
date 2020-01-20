import React from 'react';

function Welcome(props) {
  return (
    <div className="about-app">
      <h1>GreenPrint</h1>
      <p>Hello {props.name}!</p>
      <p>GreenPrint is an app intended to help you calculate and monitor the amount of carbon your travel produces on a per journey basis. If you enter two locations in the form below the app will generate several routes by mode of travel (driving, public transport, walking, and cycling). You can also calculate the carbon footprint for air travel. 
        <br></br>
        Sign up to save your journeys and see your carbon footprint dashboard. 
        </p>
    </div>
  )
}

export default Welcome;
