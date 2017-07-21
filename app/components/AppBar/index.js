/**
*
* AppBar
*
*/

import React from 'react';


import styles from './styles.css';

function AppBar() {
  return (
    <div className={styles.appBar}>
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Ultra Legendary</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li className=""><a href="/about">ABOUT</a></li>
            <li><a href="/skills">SKILLS</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="/comments">COMMENTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
