import expect from 'expect';
import projectsContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('projectsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(projectsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
