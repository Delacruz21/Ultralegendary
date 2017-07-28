/*
 *
 * CommentFormContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCommentFormContainer from './selectors';
import CommentForm from '../../components/CommentForm';
import { addComment, addCommentCancelled } from './actions';

export class CommentFormContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CommentForm {...this.props} />
    );
  }
}

const mapStateToProps = selectCommentFormContainer();

function mapDispatchToProps(dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    addCommentCancelled: () => dispatch(addCommentCancelled()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer);
