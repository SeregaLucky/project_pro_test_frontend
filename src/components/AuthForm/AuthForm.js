import React from 'react';
import googleIcon from '../../assets/icons/google-auth.png';
import styles from './authForm.module.css';
import { connect } from 'react-redux';
import formikEnhancer from './formic-yup/formikEnhancer';
import authOperations from '../../redux/auth/authOperations';
import { ErrorMessage, Form, Field } from 'formik';
import withAuthRedirect from './redirect';
import { compose } from 'redux';

const AuthForm = ({ onLogin, values, onGoogleLogin }) => {
  return (
    <div className={styles.formWrapper}>
      <p className={styles.formText}>
        Для авторизации можете использовать Google Account:
      </p>

      {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* <a href="#" className={styles.googleSignUpButton}>
        <div>
          <img alt="google" src={googleIcon} />
          <span>Google</span>
        </div>
      </a> */}
      <button onClick={onGoogleLogin}>Google</button>
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
    </div>
  );
};

const mdtp = dispatch => ({
  onRegister: values => dispatch(authOperations.registerUser(values)),
  onLogin: values => dispatch(authOperations.loginUser(values)),
  onGoogleLogin: () => dispatch(authOperations.googleLogIn()),
});
export default compose(
  withAuthRedirect,
  connect(null, mdtp),
)(formikEnhancer(AuthForm));

// class AuthForm extends Component {
//   render() {
//     return (
//       <div className={styles.formWrapper}>
//         <p className={styles.formText}>
//           Для авторизации можете использовать Google Account:
//         </p>

//         {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//         <a href="#" className={styles.googleSignUpButton}>
//           <div>
//             <img alt="google" src={googleIcon} />
//             <span>Google</span>
//           </div>
//         </a>
//         <p className={styles.formText}>
//           Или войдите в приложение используя e-mail и пароль:
//         </p>
//         <form className={styles.signUpForm}>
//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail"
//             autoComplete="on"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Пароль"
//             autoComplete="on"
//           />
//           <div className={styles.formButtonWrapper}>
//             <button className={styles.formButton}>ВОЙТИ</button>
//             <button className={styles.formButton}>РЕГИСТРАЦИЯ</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
