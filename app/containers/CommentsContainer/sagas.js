// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_COMMENTS, START_ADD_COMMENT } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestCommentsSucceeded, requestCommentsFailed } from './actions';
import { push } from 'react-router-redux';


export function fetchCommentsFromServer() {
  return fetch('http://ec2-54-175-194-217.compute-1.amazonaws.com:3000/api/comments')
    .then(response => response.json());
}

function* fetchTopics() {
  try {
    const comments = yield call(fetchCommentsFromServer);
    yield put(requestCommentsSucceeded(comments));
  } catch (e) {
    yield put(requestCommentsFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchCommentsSaga() {
  yield* takeLatest(REQUEST_COMMENTS, fetchTopics);
}

function* startAddComment() {
  yield put(push('/comments/add'));
}

export function* startAddCommentSaga() {
  yield* takeLatest(START_ADD_COMMENT, startAddComment);
}


// All sagas to be loaded
export default [
  fetchCommentsSaga,
  startAddCommentSaga,
];
