/*
 *
 * CommentsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectCommentsContainer from './selectors';
import Comments from '../../components/Comments';
import { requestComments } from './actions';

export class CommentsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestComments: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestComments();
  }

  render() {
    return (
      <div className="container-fluid">
        <Comments {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectCommentsContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestComments: () => dispatch(requestComments()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
