/*
 *
 * SignupContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP,
} from './constants';

const initialState = fromJS({});

function signupContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default signupContainerReducer;
