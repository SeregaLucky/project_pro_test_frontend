import React from 'react';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import authActions from '../../redux/auth/authActions';
import authOperations from '../../redux/auth/authOperations';
import styles from './AuthPage.module.css';

const AuthPage = ({ location, setGoogleToken, getCurrentUser }) => {
  if (location.search) {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      setGoogleToken(token);
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
  setGoogleToken: token => dispatch(authActions.googleToken(token)),
  getCurrentUser: token => dispatch(authOperations.getCurrentUser(token)),
});

export default connect(null, mapDispatchToProp)(AuthPage);
