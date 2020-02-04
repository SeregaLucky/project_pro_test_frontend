import { withFormik } from 'formik';
import schema from './validationSchema';
import authOperations from '../../../redux/auth/authOperations';

const formikEnhancer = withFormik({
  validationSchema: schema,

  mapPropsToValues: ({ email, password }) => ({
    email: email || '',
    password: password || '',
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    const name = values.email.split('@')[0];

    authOperations.registerUser(
      { name, ...values },
      '/auth/sign-up',
      props.dispatch,
    );

    // setSubmitting(false);
  },

  displayName: 'BasicForm',
});

export default formikEnhancer;
