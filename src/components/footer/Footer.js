import React from 'react';
import './Footer.css';
import logo from './../../logo.svg';

export class Footer extends React.Component {

  render () {
    return (
      <footer className="footer">
        <div className="footer-logo">
          <a href="/">
            <img src={logo} alt=""/>
          </a>
        </div>
      </footer>
    )
  }

}
