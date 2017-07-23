/**
*
* IconButton
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function IconButton({ onClick, icon, iconClass, buttonClass }) {
  return (
    <button
      className={classNames(styles.iconButton, buttonClass)}
      onClick={onClick}
    >
      <span
        className={classNames(icon, iconClass)}
        aria-hidden="true"
      >
      </span>
    </button>
  );
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
};

export default IconButton;
