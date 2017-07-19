/**
*
* LinkForm
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Image from '../Image';

class Modal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    link: React.PropTypes.string.isRequired,
    cancelModal: React.PropTypes.func.isRequired,
  }

  state = {
    links: [
      {
        id: '1',
        site: 'https://s3.amazonaws.com/h2odealer-portal/UL/gwbridge.jpg',
        alt: 'GW Bridge',
      },
      {
        id: '2',
        site: 'https://s3.amazonaws.com/h2odealer-portal/UL/brookylnbotanicalgarden.jpg',
        alt: 'Brooklyn Botanical Garden',
      },
      {
        id: '3',
        site: 'https://s3.amazonaws.com/h2odealer-portal/UL/onworldtopview.jpg',
        alt: 'One World Observatory Top View',
      },
    ],
  }

  modalNode() {
    for (const item of this.state.links) {
      if (item.id === this.props.link) {
        return (
          <Image
            imageClass={classNames('img-responsive', styles.modalImage)}
            url={item.site}
            alt={item.alt}
            onClick={this.props.cancelModal}
          />
      );
      }
    }
    return false;
  }
  render() {
    return (
      <div className={styles.modal}>
        {this.modalNode()}
      </div>
    );
  }
}


export default Modal;
