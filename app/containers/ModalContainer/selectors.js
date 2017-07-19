import { createSelector } from 'reselect';

/**
 * Direct selector to the modalContainer state domain
 */
const selectModalContainerDomain = () => state => state.get('modalContainer');

/**
 * Other specific selectors
 */

const selectRouteLink = () => (state, props) => props.params.link;

/**
 * Default selector used by ModalContainer
 */

const selectModalContainer = () => createSelector(
  selectModalContainerDomain(),
  selectRouteLink(),
  (substate, link) => Object.assign(substate.toJS(), { link })
);

export default selectModalContainer;
export {
  selectModalContainerDomain,
};
