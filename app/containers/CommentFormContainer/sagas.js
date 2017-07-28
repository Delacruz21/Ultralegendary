// import { take, call, put, select } from 'redux-saga/effects';
import { ADD_COMMENT, ADD_COMMENT_CANCELLED } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { addCommentSuccess, addCommentFailed } from './actions';
import { createComment } from '../../api';
import { goBack } from 'react-router-redux';

function* addComment(action) {
  try {
    const serverLink = yield call(createComment, action.comment);
    yield put(addCommentSuccess(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addCommentFailed(action.link, e.message));
  }
}

export function* addCommentCancelSaga() {
  yield* takeLatest(ADD_COMMENT_CANCELLED, () => put(goBack()));
}

// Individual exports for testing
export function* addCommentSaga() {
  yield* takeLatest(ADD_COMMENT, addComment);
}

// All sagas to be loaded
export default [
  addCommentSaga,
  addCommentCancelSaga,
];
