import expect from 'expect';
import modalContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('modalContainerReducer', () => {
  it('returns the initial state', () => {
    expect(modalContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
