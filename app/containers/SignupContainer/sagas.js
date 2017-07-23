// import { take, call, put, select } from 'redux-saga/effects';
import { SIGNUP, CANCEL_SIGNUP } from './constants';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';

// Individual exports for testing
export function* handleDone() {
  yield put(goBack());
}

export function* doSignupSaga() {
  yield* takeLatest(SIGNUP, handleDone);
}

export function* cancelSaga() {
  yield* takeLatest(CANCEL_SIGNUP, handleDone);
}

// All sagas to be loaded
export default [
  doSignupSaga,
  cancelSaga,
];
