/*
 *
 * CommentsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_COMMENTS_SUCCEEDED,
} from './constants';

import {
  ADD_COMMENT_SUCCESS,
} from '../CommentFormContainer/constants';

const initialState = fromJS({
  comments: [],
  change: false,
});

function addComment(state, comment) {
  const comments = state.get('comments');
  comments.push(comment);
  return state.set('comments', comments);
}

function commentsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_COMMENTS_SUCCEEDED:
      return state.set('comments', action.comments);
    case ADD_COMMENT_SUCCESS:
      return addComment(state, action.comment).set('change', true);
    default:
      return state;
  }
}

export default commentsContainerReducer;
