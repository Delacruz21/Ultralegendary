import { createSelector } from 'reselect';

/**
 * Direct selector to the commentFormContainer state domain
 */
const selectCommentFormContainerDomain = () => state => state.get('commentFormContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CommentFormContainer
 */

const selectCommentFormContainer = () => createSelector(
  selectCommentFormContainerDomain(),
  (substate) => substate.toJS()
);

export default selectCommentFormContainer;
export {
  selectCommentFormContainerDomain,
};
