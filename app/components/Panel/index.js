/**
*
* Panel
*
*/

import React from 'react';


import styles from './styles.css';

function Panel({ panelHeading, panelContent, panelQuote, quoteAuthor }) {
  return (
    <div className={styles.panel}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className={styles.panelTitle}>
            {panelHeading}
          </h3>
        </div>
        <div className="panel-body">
          <p className={styles.content}>{panelContent}</p>
          <blockquote className="text-center">
            <p>{panelQuote}</p>
            <footer>{quoteAuthor}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

Panel.propTypes = {
  panelHeading: React.PropTypes.string.isRequired,
  panelContent: React.PropTypes.string.isRequired,
  panelQuote: React.PropTypes.string,
  quoteAuthor: React.PropTypes.string,
};

export default Panel;