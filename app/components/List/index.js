/**
*
* List
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Panel from '../Panel';

function List({ items }) {
  const itemNodes = items.map(item => (
    <li
      key={item.id}
      className="list-group-item"
    >
      <Panel
        key={item.id}
        panelHeading={item.name}
        panelContent={item.comment}
      />
    </li>
  ));
  return (
    <div className="container">
      <div className={styles.list}>
        <div className="row">
          <div className={classNames(styles.centerDiv, 'col-xs-12', 'col-md-12')}>
            <ul className="list-group">
              {itemNodes}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

List.propTypes = {
  items: React.PropTypes.array.isRequired,
  panelHeading: React.PropTypes.string,
  panelContent: React.PropTypes.string,
};

export default List;
