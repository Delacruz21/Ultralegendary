import expect from 'expect';
import commentsContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('commentsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(commentsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
