/**
*
* Jumbotron
*
*/

import React from 'react';


import styles from './styles.css';

function Jumbotron() {
  return (
    <div className={styles.jumbotron}>
      <div className="jumbotron text-center">
        <h1>Ultra Legendary</h1>
        <p>Please Sign In</p>
        <div className={styles.wrapper}>
          <button type="button" className={styles.button}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
