import { createSelector } from 'reselect';
import selectSignupContainer from '../SignupContainer/selectors';

/**
 * Direct selector to the navigationContainer state domain
 */
const selectNavigationContainerDomain = () => state => state.get('navigationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContainer
 */

const selectNavigationContainer = () => createSelector(
  selectNavigationContainerDomain(),
  selectSignupContainer(),
  (substate, signupSubstate) => Object.assign(substate.toJS(), signupSubstate)
);

export default selectNavigationContainer;
export {
  selectNavigationContainerDomain,
};
