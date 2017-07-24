/**
*
* Projects
*
*/

import React from 'react';
import AppBar from '../AppBar';
import Image from '../Image'
import styles from './styles.css';

function Projects() {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-fixed-top">
        <AppBar />
      </nav>
      <div className={styles.projects}>
        <div id="projects" className="container">
          <div className="row">
            <h1>My Projects!</h1>
            <div className="col-xs-12 col-md-6">
              <Image
                url="https://s3.amazonaws.com/h2odealer-portal/UL/1sypbk.gif"
                alt="Dealer Portal"
                imageClass="img-response col-xs-12"
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <h4>H2O Dealer Portal</h4>
              <p> - This project was a revamp of an outdated legacy system site that was not mobile friendly, which needed to be migrated to the cloud.
              As part of the revamp, I had to rewrite code to use Laravel 5 framework in an effort to clean old code and document all functions. Also, made sure database calls were using PDO to prevent SQL injection.</p>
            </div>
            <div className="clearfix"></div>
            <div className="col-xs-12 col-md-6">
              <Image
                url="https://s3.amazonaws.com/h2odealer-portal/UL/1syqwu.gif"
                alt="H2O Email Platform"
                imageClass="img-response col-xs-12"
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <h4>H2O Email Platform</h4>
              <p> - This project was in an effort to send marketing emails and to improve our delivery rate for transactional emails by using Amazon SES.
                The project entitled me to configure the domain on amazon route 53 and using an EC2 instance to host the site while using SES to send emails.
                Also, setup a mysql instance on amazon RDS, which I maintain to store transactions/marketing emails sent and to prevent resending to hard bounced emails.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
