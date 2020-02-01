import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import T from 'prop-types';
import authOperations from '../../redux/auth/authOperations';

import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: T.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === this.backdropRef.current) {
      this.props.onClose();
    }
  };

  render() {
    const { onClose, onLogOut } = this.props;

    return createPortal(
      <div
        className={styles.overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>
          <button
            type="button"
            className={styles.button_exit}
            onClick={onClose}
          >
            <div className={styles.icon}></div>
          </button>

          <h1 className={styles.text}>Вы точно хотите выйти?</h1>

          <div className={styles.item}>
            <button className={styles.button} type="button" onClick={onLogOut}>
              Дa
            </button>
            <button className={styles.button} type="button" onClick={onClose}>
              Нет
            </button>
          </div>
        </div>
      </div>,
      MODAL_ROOT,
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(authOperations.logoutUser()),
});

export default connect(null, mapDispatchToProps)(Modal);
