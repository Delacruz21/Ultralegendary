import { createSelector } from 'reselect';

/**
 * Direct selector to the projectsContainer state domain
 */
const selectProjectsContainerDomain = () => state => state.get('projectsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProjectsContainer
 */

const selectProjectsContainer = () => createSelector(
  selectProjectsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectProjectsContainer;
export {
  selectProjectsContainerDomain,
};
