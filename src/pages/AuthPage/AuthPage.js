import React from 'react';
import AuthForm from '../../components/AuthForm';
import { connect } from 'react-redux';
import authActions from '../../redux/auth/authActions';
import authOperations from '../../redux/auth/authOperations';
import styles from './AuthPage.module.css';

const AuthPage = props => {
  const { location, setToken } = props;
  if (location.search) {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      setToken(token);
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

export default connect(null, mapDispatchToProp)(AuthPage);
