/**
*
* List
*
*/

import React from 'react';
import classNames from 'classnames';
import Panel from '../Panel';
import styles from './styles.css';

function List({ panelHeading, panelContent }) {
  return (
    <div className="container">
      <div className={styles.list}>
        <div className="row">
          <h3>Comments</h3>
          <hr />
          <div className={classNames(styles.centerDiv, 'col-xs-12', 'col-md-12')}>
            <ul className="list-group">
              <li className="list-group-item">
                <Panel
                  panelHeading={panelHeading}
                  panelContent={panelContent}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

List.propTypes = {
  panelHeading: React.PropTypes.string,
  panelContent: React.PropTypes.string,
};

export default List;
