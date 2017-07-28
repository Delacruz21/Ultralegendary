import expect from 'expect';
import commentFormContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('commentFormContainerReducer', () => {
  it('returns the initial state', () => {
    expect(commentFormContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
