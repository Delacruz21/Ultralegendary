import expect from 'expect';
import skillsContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('skillsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(skillsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
