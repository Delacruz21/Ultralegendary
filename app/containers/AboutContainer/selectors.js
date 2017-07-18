import { createSelector } from 'reselect';

/**
 * Direct selector to the aboutContainer state domain
 */
const selectAboutContainerDomain = () => state => state.get('aboutContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AboutContainer
 */

const selectAboutContainer = () => createSelector(
  selectAboutContainerDomain(),
  (substate) => substate.toJS()
);

export default selectAboutContainer;
export {
  selectAboutContainerDomain,
};
