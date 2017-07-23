/*
 *
 * ProjectsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectProjectsContainer from './selectors';
import Projects from '../../components/Projects';

export class ProjectsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Projects {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectProjectsContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
