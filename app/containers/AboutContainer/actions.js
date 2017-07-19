/*
 *
 * AboutContainer actions
 *
 */

import {
  START_MODAL,
} from './constants';


export function startModal(link) {
  return {
    type: START_MODAL,
    link,
  };
}
