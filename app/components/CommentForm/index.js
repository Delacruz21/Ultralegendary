/**
*
* Signup
*
*/

import React from 'react';
import TextInput from '../TextInput';
import styles from './styles.css';

class CommentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    addComment: React.PropTypes.func.isRequired,
    addCommentCancelled: React.PropTypes.func.isRequired,
  };

  state = {
    nameError: '',
    commentError: '',
  };

  onAdd = () => {
    const name = this.nameField.value();
    const comment = this.commentField.value();
    let nameError = null;
    let commentError = null;

    if (!name) {
      nameError = 'Please provide a valid name';
    }

    if (!comment) {
      commentError = 'Please provide a valid comment';
    }

    this.setState({
      nameError,
      commentError,
    });

    if (nameError || commentError) {
      return;
    }

    this.props.addComment({
      name,
      comment,
    });
  }

  render() {
    return (
      <div className={styles.signupModal}>
        <div className={styles.signup}>
          <div
            className={styles.heading}
          >
            Add Comment!
          </div>

          <TextInput
            placeholder="Your Name"
            ref={(f) => { this.nameField = f; }}
            errorText={this.state.nameError}
          />

          <TextInput
            placeholder="Your Comment"
            ref={(f) => { this.commentField = f; }}
            errorText={this.state.commentError}
          />

          <div
            className={styles.actionContainer}
          >
            <div
              className={styles.button}
              onClick={this.props.addCommentCancelled}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.onAdd}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;
