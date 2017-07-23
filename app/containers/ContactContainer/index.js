/*
 *
 * ContactContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectContactContainer from './selectors';
import Contact from '../../components/Contact';

export class ContactContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container-fluid">
        <Contact />
      </div>
    );
  }
}

const mapStateToProps = selectContactContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
