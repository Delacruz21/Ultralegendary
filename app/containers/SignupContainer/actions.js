/*
 *
 * SignupContainer actions
 *
 */

import {
  SIGNUP,
  CANCEL_SIGNUP,
} from './constants';

// action for sign up
export function signUp(email) {
  return {
    type: SIGNUP,
    email,
  };
}

// action incase client chooses to cancel
export function cancelSignup() {
  return {
    type: CANCEL_SIGNUP,
  };
}
