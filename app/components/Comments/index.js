/**
*
* Comments
*
*/

import React from 'react';
import AppBar from '../AppBar';
import List from '../List'
import styles from './styles.css';

function Comments() {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-fixed-top">
        <AppBar />
      </nav>
      <div className={styles.comments}>
        <div id="comments" className="container">
          <div className="row text-center">
            <h1>Please Leave A Comment!</h1>
            <List
              panelHeading="testing"
              panelContent="Lorem isum"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
