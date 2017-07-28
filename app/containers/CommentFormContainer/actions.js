/*
 *
 * CommentFormContainer actions
 *
 */

import {
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED,
  ADD_COMMENT_CANCELLED,
} from './constants';

export function addCommentCancelled() {
  return {
    type: ADD_COMMENT_CANCELLED,
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function addCommentSuccess(comment) {
  return {
    type: ADD_COMMENT_SUCCESS,
    comment,
  };
}

export function addCommentFailed(comment, message) {
  return {
    type: ADD_COMMENT_FAILED,
    comment,
    message,
  };
}
