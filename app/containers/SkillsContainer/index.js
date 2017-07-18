/*
 *
 * SkillsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSkillsContainer from './selectors';

export class SkillsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = selectSkillsContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
