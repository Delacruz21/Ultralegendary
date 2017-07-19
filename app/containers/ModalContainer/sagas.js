// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import { CANCEL_MODAL } from './constants';

// Individual exports for testing
export function* cancelModalSaga() {
  yield* takeLatest(CANCEL_MODAL, () => put(goBack()));
}

// All sagas to be loaded
export default [
  cancelModalSaga,
];
