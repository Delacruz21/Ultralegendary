/*
 *
 * AboutContainer actions
 *
 */

import {
  TOGGLE_MODAL,
} from './constants';

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}
