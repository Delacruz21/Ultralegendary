import expect from 'expect';
import aboutContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('aboutContainerReducer', () => {
  it('returns the initial state', () => {
    expect(aboutContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
