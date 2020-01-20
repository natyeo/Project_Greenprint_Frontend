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
          <a href="http://impact.brighterplanet.com/" target="_blank" rel="noopener noreferrer">
          <li>
          Brighter Planet
          </li>
          </a>
          </ul>
        </div>
        <div className="eleven wide column">
          <h3>Calculations</h3>
          <p>This app calculates the carbon data based around the distance travelled and the mode of travel used. If driving, the calculation is based on an average car, if using public transit, an average train is assumed. Walking and cycling will always produce no carbon so no calculation happens. The Carbon produced is pulled from the Trip to Carbon API (for rail and driving journeys) and from Brighter Planet API (for flights).</p>
        </div>
      </div>
      <div className="tagline">
      <p>Created with <a href="https://inhabit.global/" target="_blank" rel="noopener noreferrer">love</a> Project GreenPrint <span>{(new Date().getFullYear())}</span>
      </p>
      </div>
    </div>

  )

}

export default footer;
