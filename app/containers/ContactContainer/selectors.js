import { createSelector } from 'reselect';

/**
 * Direct selector to the contactContainer state domain
 */
const selectContactContainerDomain = () => state => state.get('contactContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ContactContainer
 */

const selectContactContainer = () => createSelector(
  selectContactContainerDomain(),
  (substate) => substate.toJS()
);

export default selectContactContainer;
export {
  selectContactContainerDomain,
};
