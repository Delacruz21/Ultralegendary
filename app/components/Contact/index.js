/**
*
* Contact
*
*/

import React from 'react';
import AppBar from '../AppBar';
import TextInput from '../TextInput';
import styles from './styles.css';
import classNames from 'classnames';
import validator from 'email-validator';

class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    nameError: '',
    emailError: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.email.value();
    const name = this.name.value();
    const form = e.target;

    let emailError = null;
    let nameError = null;

    if (!validator.validate(email)) {
      emailError = 'Please provide a valid email';
    }

    if (!name) {
      nameError = 'Please provide a valid Name';
    }

    this.setState({
      nameError,
      emailError,
    });

    if (emailError || nameError) {
      return;
    }
    form.submit();
  }

  render() {
    const gotcha = {
      display: 'none',
    };
    return (
      <div className="container">
        <nav className="navbar navbar-default navbar-fixed-top">
          <AppBar />
        </nav>
        <div className={styles.contact}>
          <div id="contact" className="container">
            <div className="row text-center">
              <div className="col-xs-12 col-md-6">
                <h1>Lets Get In Touch!</h1>
                <hr />
                <form onSubmit={(e) => this.handleSubmit(e)} action="https://formspree.io/mdelacruz1021@gmail.com" method="POST">
                  <div className="form-group">
                    <TextInput
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      errorText={this.state.nameError}
                      ref={(f) => (this.name = f)}
                    />
                  </div>
                  <div className="form-group">
                    <TextInput
                      placeholder="Your Email"
                      name="_replyto"
                      type="email"
                      errorText={this.state.emailError}
                      ref={(f) => (this.email = f)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classNames(styles.textarea, 'form-control')}
                      rows="5"
                      name="details"
                      id="textarea"
                      placeholder="Leave a message!"
                    />
                    <input type="text" name="_gotcha" style={gotcha} />
                  </div>
                  <div className="form-group">
                    <button type="sumbit" className={classNames(styles.button, 'btn', 'btn-danger', 'btn-block')}>Send</button>
                  </div>
                </form>
              </div>
              <div className="hidden-xs col-md-6">
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
