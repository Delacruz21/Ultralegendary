/*
 *
 * ModalContainer actions
 *
 */

import {
  CANCEL_MODAL,
} from './constants';

export function cancelModal() {
  return {
    type: CANCEL_MODAL,
  };
}
