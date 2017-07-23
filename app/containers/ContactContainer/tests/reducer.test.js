import expect from 'expect';
import contactContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('contactContainerReducer', () => {
  it('returns the initial state', () => {
    expect(contactContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
