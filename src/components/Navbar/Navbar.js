import React from 'react';
import './Navbar.css';

const navbar = () => {
  return (
      <nav className="ui large secondary menu">
        <div className="left item">
          <li className="item">
            Home
          </li>
        </div>
        <div className="right item">
          <li className="item">
            Sign In
          </li>
          <li className="item">
            Sign Out
          </li>
        </div>
      </nav>
  )

}

export default navbar;