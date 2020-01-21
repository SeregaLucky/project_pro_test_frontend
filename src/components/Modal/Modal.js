import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import T from 'prop-types';

import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    // onClose: T.func.isRequired,
  };

  render() {
    return createPortal(
      <div
        className={styles.overlay}
        ref={this.backdropRef}
        // onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>
          {/* Children */}
          <div class={styles.icon}></div>
          <p className={styles.text}>Вы точно хотите выйти?</p>
          <div className={styles.item}>
            <button
              className={styles.button}
              type="button"
              onClick={this.onClick}
            >
              Дa
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={this.onClick}
            >
              Нет
            </button>
          </div>
        </div>
      </div>,
      MODAL_ROOT,
    );
  }
}

export default Modal;
