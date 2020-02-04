import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { ErrorMessage, Form, Field } from 'formik';
import Notifications from './pushNotifications';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import formikEnhancer from './formic-yup/formikEnhancer';
import authOperations from '../../redux/auth/authOperations';
import googleIcon from '../../assets/icons/google-auth.png';
import 'react-toastify/dist/ReactToastify.css';
import styles from './authForm.module.css';

const AuthForm = ({ onLogin, values }) => {
  return (
    <div className={styles.formWrapper}>
      <p className={styles.formText}>
        Для авторизации можете использовать Google Account:
      </p>
      <a
        href="http://ec2-3-133-102-159.us-east-2.compute.amazonaws.com/api/auth/google"
        className={styles.googleSignUpButton}
      >
        <div className={styles.googleBtnContentWraper}>
          <img alt="google" src={googleIcon} />
          <span>Google</span>
        </div>
      </a>

      <p className={styles.formText}>
        Или войдите в приложение используя e-mail и пароль:
      </p>

      <Form className={styles.signUpForm}>
        <div className={styles.invalid}>
          <ErrorMessage className={styles.invalid} name="email" />
        </div>
        <Field
          type="email"
          name="email"
          placeholder="E-mail"
          autoComplete="on"
        />
        <div className={styles.invalid}>
          <ErrorMessage className={styles.invalid} name="password" />
        </div>
        <Field
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="on"
        />
        <div className={styles.formButtonWrapper}>
          <button
            onClick={() => onLogin(values)}
            type="button"
            className={styles.formButton}
          >
            ВОЙТИ
          </button>
          <button type="submit" className={styles.formButton}>
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </Form>
      {<Notifications />}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  // onRegister: values => dispatch(authOperations.registerUser(values)),
  onLogin: values => dispatch(authOperations.loginUser(values)),
});

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps),
  formikEnhancer,
)(AuthForm);
