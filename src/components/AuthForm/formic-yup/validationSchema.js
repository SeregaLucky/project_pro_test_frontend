import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .min(7, 'Must be 7 characters or more')
    .required('Required'),
});

export default schema;
