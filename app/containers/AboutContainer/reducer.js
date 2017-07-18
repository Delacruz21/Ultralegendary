/*
 *
 * AboutContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_MODAL,
} from './constants';

const initialState = fromJS({
  isModalOpen: false,
});

function aboutContainerReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return state.set('isModalOpen', !state.get('isModalOpen'));
    default:
      return state;
  }
}

export default aboutContainerReducer;
