/*
 *
 * SkillsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  skills: [
    {
      id: '1',
      skill: 'Amazon AWS',
    },
    {
      id: '2',
      skill: 'Aqua Data Studio',
    },
    {
      id: '3',
      skill: 'C++',
    },
    {
      id: '4',
      skill: 'CSS3',
    },
    {
      id: '5',
      skill: 'Drupal',
    },
    {
      id: '6',
      skill: 'ES6 Javascript',
    },
    {
      id: '7',
      skill: 'Graphql',
    },
    {
      id: '8',
      skill: 'HTML5',
    },
    {
      id: '9',
      skill: 'Informix',
    },
    {
      id: '10',
      skill: 'jQuery',
    },
    {
      id: '11',
      skill: 'Jira',
    },
    {
      id: '12',
      skill: 'Javascript',
    },
    {
      id: '13',
      skill: 'Java',
    },
    {
      id: '14',
      skill: 'Laravel5',
    },
    {
      id: '15',
      skill: 'Linux',
    },
    {
      id: '16',
      skill: 'MySql',
    },
    {
      id: '17',
      skill: 'Mac',
    },
    {
      id: '18',
      skill: 'Node.js',
    },
    {
      id: '19',
      skill: 'Photoshop',
    },
    {
      id: '20',
      skill: 'PHP5/7',
    },
    {
      id: '21',
      skill: 'React.js',
    },
    {
      id: '22',
      skill: 'Relay',
    },
    {
      id: '23',
      skill: 'React-router',
    },
    {
      id: '24',
      skill: 'Redux',
    },
    {
      id: '25',
      skill: 'Redux-saga',
    },
    {
      id: '26',
      skill: 'Tableau',
    },
    {
      id: '27',
      skill: 'Unix',
    },
    {
      id: '28',
      skill: 'Windows',
    },
    {
      id: '29',
      skill: 'Webpack',
    },
  ],
});

function skillsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default skillsContainerReducer;
