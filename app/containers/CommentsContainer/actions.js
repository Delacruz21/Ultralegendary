/*
 *
 * CommentsContainer actions
 *
 */

import {
  REQUEST_COMMENTS,
  REQUEST_COMMENTS_SUCCEEDED,
  REQUEST_COMMENTS_FAILED,
  START_ADD_COMMENT,
} from './constants';

export function startAddComment() {
  return {
    type: START_ADD_COMMENT,
  };
}
// action for requesting comments
export function requestComments() {
  return {
    type: REQUEST_COMMENTS,
  };
}
// action for comments recieved from db
export function requestCommentsSucceeded(comments) {
  return {
    type: REQUEST_COMMENTS_SUCCEEDED,
    comments,
  };
}
// action for when comment retrieval fails
export function requestCommentsFailed(message) {
  return {
    type: REQUEST_COMMENTS_FAILED,
    message,
  };
}
