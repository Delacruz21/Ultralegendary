import expect from 'expect';
import signupContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('signupContainerReducer', () => {
  it('returns the initial state', () => {
    expect(signupContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
