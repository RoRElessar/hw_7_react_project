import React from 'react';
import './Navbar.css';
import logo from './../../logo.svg';

export class Navbar extends React.Component {

  render () {
    return (
      <div className="navigation">
        <div className="logo-container">
          <div className="logo">
            <a href="/"><img src={logo} alt="logo"/></a>
          </div>
        </div>
        <ul className="menu-items">
          <li className="menu-item"><a href="#">About Us</a></li>
          <li className="menu-item"><a href="#">Contact Us</a></li>
        </ul>
      </div>
    );
  }

}
