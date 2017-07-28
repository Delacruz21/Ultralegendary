/*
 *
 * CommentFormContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
} from './constants';

const initialState = fromJS({});

function commentFormContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default commentFormContainerReducer;
