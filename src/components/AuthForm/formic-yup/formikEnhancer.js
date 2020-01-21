import axios from 'axios';
import { withFormik } from 'formik';
import schema from './validationSchema';
import authActions from '../../../redux/auth/authActions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com/users/';
const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const formikEnhancer = withFormik({
  validationSchema: schema,
  mapPropsToValues: ({ email, password }) => ({
    email: email || '',
    password: password || '',
  }),
  handleSubmit: async (values, { setSubmitting, props }) => {
    props.dispatch(authActions.registerStart());
    axios
      .post('signup', values)
      .then(response => {
        setToken(response.data.token);
        props.dispatch(authActions.registerSuccess(response.data));
      })
      .catch(error => props.dispatch(authActions.registerFailure(error)));
    setSubmitting(false);
  },
  displayName: 'BasicForm',
});
export default formikEnhancer;
