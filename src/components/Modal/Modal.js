import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import T from 'prop-types';
import authOperations from '../../redux/auth/authOperations';
import globalActions from '../../redux/global/globalActions';

import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

function Modal({ onLogOut, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleKeyPress = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const backdropRef = useRef();

  const handleBackdropClick = e => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.overlay}
      ref={backdropRef}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className={styles.modal}>
        <button type="button" className={styles.buttonExit} onClick={onClose}>
          &#215;
        </button>

        <p className={styles.title}>Вы точно хотите выйти?</p>

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

Modal.propTypes = {
  onClose: T.func.isRequired,
  onLogOut: T.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(globalActions.closeModal()),
  onLogOut: () => dispatch(authOperations.logoutUser()),
});

export default connect(null, mapDispatchToProps)(Modal);
