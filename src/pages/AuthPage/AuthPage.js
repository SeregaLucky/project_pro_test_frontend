import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AuthForm from '../../components/AuthForm';
import withAuthRedirect from '../../components/AuthForm/redirect';
import authActions from '../../redux/auth/authActions';
import authOperations from '../../redux/auth/authOperations';
import styles from './AuthPage.module.css';

const AuthPage = (location, setToken, getCurrentUser) => {
  if (location.search) {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      setToken(token);
      getCurrentUser(token);
    }
  }

  return (
    <section className={styles.authPage}>
      <div className={`${styles.container} ${styles.addFlex}`}>
        <div className={styles.blockInfo}>
          <h2 className={styles.title}>Pro Test</h2>

          <p className={styles.text}>
            <span className={styles.textSpan}>[</span> Мы поможем найти слабые
            места в знаниях, чтобы вы смогли их усилить. Покажем что актуально
            знать для <span className={styles.textSpan}>QA Engineer</span> и
            постараемся сделать процесс познания более разнообразным
            <span className={styles.textSpan}>_ ]</span>
          </p>
        </div>
        <AuthForm className={styles.divForm} />
      </div>
    </section>
  );
};

const mapDispatchToProp = dispatch => ({
  setToken: token => dispatch(authActions.googleToken(token)),
  getCurrentUser: token => dispatch(authOperations.getCurrentUser(token)),
});

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProp),
)(AuthPage);
