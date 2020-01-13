import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <div className="ui footer segment vertical">
      <div className=" ui stackable height grid">
        <div className="three wide column">
          <h3>Resources</h3>
          <ul>
            <a href="https://developers.google.com/maps/documentation/directions/start" target="_blank" rel="noopener noreferrer">
              <li>
                Google Directions
              </li>
            </a>
            <a href="https://triptocarbon.xyz/" target="_blank" rel="noopener noreferrer">
              <li>
                Trip to Carbon
              </li>
            </a>
          </ul>
        </div>
        <div className="nine wide column">
          <h3>Calculations</h3>
          <p>This app uses calculates the carbon data based around the average stuff to go in here as we want to explain what the data is. Define the underlying principles that drive decisions and strategy for your design language. A better understanding of usage can aid in prioritizing future efforts. Out of scope. All hands on deck marketing computer development html roi feedback team website today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud , but thinking outside the box proceduralize, for work. </p>
        </div>
      </div>
      <div className="tagline">
          <p>Created with love Project GreenPrint <span>{(new Date().getFullYear())}</span>
          </p>
      </div>
    </div>
    
  )

}

export default footer;