/*
 *
 * CommentsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCommentsContainer from './selectors';
import Comments from '../../components/Comments';
import { requestComments, startAddComment } from './actions';

export class CommentsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.element,
    comments: React.PropTypes.array,
    change: React.PropTypes.bool,
    requestComments: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestComments();
  }

  render() {
    return (
      <Comments {...this.props} />
    );
  }
}

const mapStateToProps = selectCommentsContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestComments: () => dispatch(requestComments()),
    startAddComment: () => dispatch(startAddComment()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
