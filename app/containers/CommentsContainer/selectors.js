import { createSelector } from 'reselect';

/**
 * Direct selector to the commentsContainer state domain
 */
const selectCommentsContainerDomain = () => state => state.get('commentsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CommentsContainer
 */

const selectCommentsContainer = () => createSelector(
  selectCommentsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectCommentsContainer;
export {
  selectCommentsContainerDomain,
};
