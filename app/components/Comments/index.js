/**
*
* Comments
*
*/

import React from 'react';
import AppBar from '../AppBar';
import List from '../List';
import IconButton from '../IconButton';
import styles from './styles.css';

function Comments({ comments, children, startAddComment }) {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-fixed-top">
        <AppBar />
      </nav>
      <div className={styles.comments}>
        <div id="comments" className="container">
          <div className="row text-center">
            <h1>Please Leave A Comment!</h1>
            <hr />
            <div className={styles.wrapper}>
              <IconButton
                type="button"
                icon="glyphicon glyphicon-plus"
                buttonClass={styles.button}
                onClick={() => startAddComment()}
              />
            </div>
            <List
              items={comments}
            />
          {children}
          </div>
        </div>
      </div>
    </div>
  );
}

Comments.propTypes = {
  startAddComment: React.PropTypes.func.isRequired,
  comments: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      comment: React.PropTypes.string,
    })
  ),
  children: React.PropTypes.element,
};

export default Comments;
