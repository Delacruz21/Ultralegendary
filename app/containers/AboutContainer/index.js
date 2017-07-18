/*
 *
 * AboutContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAboutContainer from './selectors';
import About from '../../components/About';
import { toggleModal } from './actions';

export class AboutContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid">
        <About {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectAboutContainer();

function mapDispatchToProps(dispatch) {
  return {
    toggleModal: () => dispatch(toggleModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
