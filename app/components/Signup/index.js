/**
*
* Signup
*
*/

import React from 'react';
import validator from 'email-validator';
import TextInput from '../TextInput';
import styles from './styles.css';

class Signup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    signUp: React.PropTypes.func.isRequired,
    cancelSignup: React.PropTypes.func.isRequired,
  };

  state = {};

  signup = () => {
    const email = this.emailField.value();
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }

    this.setState({
      errorText: null,
    });

    this.props.signUp(email);
  }

  render() {
    return (
      <div className={styles.signupModal}>
        <div className={styles.signup}>
          <div
            className={styles.heading}
          >
            Login with your email
          </div>

          <TextInput
            placeholder="Your email"
            ref={(f) => { this.emailField = f; }}
            errorText={this.state.errorText}
          />

          <div
            className={styles.actionContainer}
          >
            <div
              className={styles.button}
              onClick={this.props.cancelSignup}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.signup}
            >
              Sign in
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
