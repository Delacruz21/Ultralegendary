/**
*
* Jumbotron
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import IconButton from '../IconButton';
import styles from './styles.css';

class Jumbotron extends React.Component {
  static propTypes = {
    email: React.PropTypes.string,
  }
  // function for redirecting to signup page
  signIn() {
    return browserHistory.push('/signup');
  }
  //  display sign in page
  displaySignIn() {
    return (
      <div>
        <p>Please Sign In</p>
        <div className={styles.wrapper}>
          <IconButton
            type="button"
            icon="glyphicon glyphicon-plus"
            buttonClass={styles.button}
            onClick={this.signIn}
          />
        </div>
      </div>
    );
  }
  // display signed in page div
  displaySignedIn() {
    return (
      <div>
        <p>Hi, <span style={{ textTransform: 'lowercase', color: 'red', background: 'lightblue' }}>{this.props.email}</span> and
          Thanks for checking out my site!
        </p>
        <p><var>I used reselect to combine selectors and took email held in state set by redux
        to pass down to props for it to be displayed on this navigation page!
        </var></p>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.jumbotron}>
        <div className="jumbotron text-center">
          <h1>Ultra Legendary</h1>
          {this.props.email ? this.displaySignedIn() : this.displaySignIn()}
        </div>
      </div>
    );
  }
}

export default Jumbotron;
