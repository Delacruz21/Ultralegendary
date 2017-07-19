/**
*
* About
*
*/

import React from 'react';
import AppBar from '../AppBar';
import Image from '../Image';
import classNames from 'classnames';

import styles from './styles.css';

function About({ children, startModal }) {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-fixed-top">
        <AppBar />
      </nav>
      <div className={styles.about}>
        <div id="about" className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2>About Me</h2><br />
              <h4>The first desktop I ever had was a compaq that my dad built and it was running Windows 95.
                 Ever since, I had the opportunity to build my own desktops and learn about putting different computer parts together.
                 In high school, I took an HTML course and quickly became interested in learning to develop websites.
                 As I attended college I became very passionate towards web development and gained a solid understanding of business concepts.
                 Through professional work I aquired more technical skills to support the needs of an organization and its customers.
              </h4><br />
              <p>Need more information about me. Please Contact Me!</p><br />
              <div className={styles.button}>
                <button className="btn btn-default btn-lg">Get in Touch</button>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <Image
                className="img-responsive"
                url={'https://s3.amazonaws.com/h2odealer-portal/UL/oneworld.jpg'}
                alt="One World Observatory"
                width={'180'}
              />
            </div>
            <div className={classNames('clearfix', styles.clear)}></div>
            <div className="row text-center">
              <h2 className={styles.imgheadline}>View some of my Cool Images!</h2>
              <div className={classNames('col-md-4', 'text-center', styles.thumbnail)}>
                <div className="thumbnail">
                  <Image
                    className="img-responsive"
                    url={'https://s3.amazonaws.com/h2odealer-portal/UL/gwbridge.jpg'}
                    alt="George Washington Bridge"
                    width={'230'}
                    onClick={() => startModal(1)}
                  />
                  <div className="caption">
                    <p>George Washington Bridge</p>
                  </div>
                </div>
              </div>
              <div className={classNames('col-md-4', 'text-center', styles.thumbnail)}>
                <div className="thumbnail">
                  <Image
                    className="img-responsive"
                    url={'https://s3.amazonaws.com/h2odealer-portal/UL/brookylnbotanicalgarden.jpg'}
                    alt="Brooklyn Botanical Garden"
                    width={'230'}
                    onClick={() => startModal(2)}
                  />
                  <div className="caption">
                    <p>Brooklyn Botanical Garden</p>
                  </div>
                </div>
              </div>
              <div className={classNames('col-md-4', 'text-center', styles.thumbnail)}>
                <div className="thumbnail">
                  <Image
                    className="img-responsive"
                    url={'https://s3.amazonaws.com/h2odealer-portal/UL/onworldtopview.jpg'}
                    alt="One World Observatory Top View"
                    width={'230'}
                    onClick={() => startModal(3)}
                  />
                  <div className="caption">
                    <p>One World Observatory Top View</p>
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  startModal: React.PropTypes.func,
  children: React.PropTypes.element,
};

export default About;
