/*
 *
 * AboutContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAboutContainer from './selectors';
import About from '../../components/About';
import { startModal } from './actions';

export class AboutContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.element,
  }
  render() {
    return (
      <div className="container-fluid">
        <About {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectAboutContainer();

function mapDispatchToProps(dispatch) {
  return {
    startModal: (link) => dispatch(startModal(link)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
