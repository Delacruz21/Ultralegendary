/**
*
* Skills
*
*/

import React from 'react';
import AppBar from '../AppBar';
import TextInput from '../TextInput';
import styles from './styles.css';
import classNames from 'classnames';

class Skills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    skills: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        skill: React.PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  state = {
    newList: false,
    updatedList: [],
  }

  // function to create Nodes for filtered elements
  displaySkills(s) {
    return (
      <a
        className={classNames(styles.anchor, 'list-group-item')}
        key={s.id}
      >
        {s.skill}
      </a>
    );
  }
  // function to run filtering on element
  filtering(el, evt) {
    return el.skill.toLowerCase().search(evt.target.value.toLowerCase()) !== -1;
  }
  // function to filter skill from intial state based on input
  filterSkill(evt) {
    this.setState({
      newList: true,
      updatedList: this.props.skills.filter((el) => this.filtering(el, evt)),
    });
  }
  // Determine if the list should be mapped over again
  list() {
    if (!this.state.newList) {
      return this.props.skills;
    }
    return this.state.updatedList;
  }

// Nodes to create divs from all sills from props
  skillNodes = () => this.list().map(this.displaySkills);

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default navbar-fixed-top">
          <AppBar />
        </nav>
        <div className={styles.skills}>
          <div id="skills" className="container">
            <div className="row text-center">
              <h1 onClick={this.filterSkill} ><code>Check Out My Skills!</code></h1>
              <div className={classNames(styles.centerDiv, 'col-xs-12', 'col-md-8')}>
                <TextInput
                  className={styles.input}
                  placeholder="Search for my skills"
                  ref={(f) => { this.inputField = f; }}
                  onChange={(evt) => { this.filterSkill(evt); }}
                />
                <ul className="list-group">
                  {this.skillNodes()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
