/*
 *
 * AboutContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  START_MODAL,
} from './constants';

const initialState = fromJS({
  link: '',
});

function aboutContainerReducer(state = initialState, action) {
  switch (action.type) {
    case START_MODAL:
      return state.set('link', action.link);
    default:
      return state;
  }
}

export default aboutContainerReducer;
