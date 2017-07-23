/*
 *
 * SignupContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSignupContainer from './selectors';
import Signup from '../../components/Signup';
import { signUp, cancelSignup } from './actions';

export class SignupContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Signup {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectSignupContainer();

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email) => dispatch(signUp(email)),
    cancelSignup: () => dispatch(cancelSignup()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
