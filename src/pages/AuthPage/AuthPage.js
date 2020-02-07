import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import T from 'prop-types';
import AuthForm from '../../components/AuthForm';
import authActions from '../../redux/auth/authActions';
import authOperations from '../../redux/auth/authOperations';
import styles from './AuthPage.module.css';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const AuthPage = ({ location, setGoogleToken, getCurrentUser, dispatch }) => {
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
        <AuthForm className={styles.divForm} dispatch={dispatch} />
      </div>
    </section>
  );
};

AuthPage.propTypes = {
  location: T.shape().isRequired,
  setGoogleToken: T.func.isRequired,
  getCurrentUser: T.func.isRequired,
  dispatch: T.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setGoogleToken: token => dispatch(authActions.googleToken(token)),
  getCurrentUser: token => dispatch(authOperations.getCurrentUser(token)),
});

// export default connect(null, mapDispatchToProps)(AuthPage);

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps),
)(AuthPage);
