/**
*
* Image
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Image({ url, alt, width, imageClass, onClick }) {
  return (
    <div className={styles.image}>
      <img src={url} alt={alt} width={width} className={classNames(imageClass)} onClick={onClick} />
    </div>
  );
}

Image.propTypes = {
  url: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  imageClass: React.PropTypes.string,
  width: React.PropTypes.string,
};

export default Image;
