/**
*
* Image
*
*/

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Image({ url, alt, width, toggleModal, isModalOpen }) {
  let imageNode;
  if (!isModalOpen) {
    imageNode = (
      <div className={classNames(styles.image, { [styles.overlay]: isModalOpen })}>
        <img src={url} alt={alt} width={width} onClick={() => toggleModal()} />
      </div>
    );
  } else {
    imageNode = (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      { imageNode }
    </div>
  );
}

Image.propTypes = {
  url: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  toggleModal: React.PropTypes.func,
  isModalOpen: React.PropTypes.bool,
  width: React.PropTypes.string,
};

export default Image;
