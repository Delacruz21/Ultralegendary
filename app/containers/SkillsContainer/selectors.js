import { createSelector } from 'reselect';

/**
 * Direct selector to the skillsContainer state domain
 */
const selectSkillsContainerDomain = () => state => state.get('skillsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SkillsContainer
 */

const selectSkillsContainer = () => createSelector(
  selectSkillsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectSkillsContainer;
export {
  selectSkillsContainerDomain,
};
