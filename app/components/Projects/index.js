/**
*
* Projects
*
*/

import React from 'react';
import AppBar from '../AppBar';

import styles from './styles.css';

function Projects() {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-fixed-top">
        <AppBar />
      </nav>
      <div className={styles.projects}>
        <div id="projects" className="container">
          <div className="row">
            <div className="col-xs-12">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
