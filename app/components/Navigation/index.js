/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from '../AppBar';
import Jumbotron from '../Jumbotron';
import Panel from '../Panel';
// import styles from './styles.css';

function Navigation({ email, children }) {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-default navbar-fixed-top">
        <AppBar />
      </nav>
      <div className="row-fluid">
        <Jumbotron
          email={email}
        />
        <Panel
          panelHeading="Welcome! My name is Michael De La Cruz"
          panelContent="I hope to give you an insight into my work, knowledge, and interests. Having this site allows me to express myself using HTML5, CSS3, and JavaScript"
          panelQuote="Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind."
          quoteAuthor="Dr. Seuss"
        />
        {children}
      </div>
    </div>
  );
}

Navigation.propTypes = {
  email: React.PropTypes.string,
  children: React.PropTypes.element,
};

export default Navigation;
