import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faMoon, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import './Navbar.styles.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <input disabled type="text" placeholder="Search..." />
      </div>
      <div className="center-navbar">
        <button disabled type="button">
          <FontAwesomeIcon icon={faHome} />
        </button>
        <button disabled type="button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <div className="right-navbar">
        <button disabled type="button">
          <FontAwesomeIcon icon={faSignInAlt} />
        </button>
        <button disabled type="button">
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
