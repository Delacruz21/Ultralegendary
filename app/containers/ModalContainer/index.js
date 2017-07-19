/*
 *
 * ModalContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectModalContainer from './selectors';
import Modal from '../../components/Modal';
import { cancelModal } from './actions';

export class ModalContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Modal {...this.props} />
    );
  }
}

const mapStateToProps = selectModalContainer();

function mapDispatchToProps(dispatch) {
  return {
    cancelModal: () => dispatch(cancelModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
