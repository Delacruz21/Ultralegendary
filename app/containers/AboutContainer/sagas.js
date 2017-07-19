// import { take, call, put, select } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { START_MODAL } from './constants';

function* startModalView(action) {
  yield put(push(`/about/modal/${action.link}`));
}

// Individual exports for testing
export function* startModalSaga() {
  yield* takeLatest(START_MODAL, startModalView);
}

// All sagas to be loaded
export default [
  startModalSaga,
];
