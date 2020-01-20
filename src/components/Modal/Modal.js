import React from 'react';
import './Modal.css';


const modal = () => {

  return (
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-header">Loading data</h2>
          </div>
          <div className="modal-body">
            <p>Patience now</p>
          </div>
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
  )
}


export default modal;
