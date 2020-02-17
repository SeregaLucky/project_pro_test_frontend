import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Невалидный e-mail')
    .max(50, 'E-mail должен быть меньше 50 символов')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Некоректный e-mail',
    )
    .required('Обязательное поле'),
  password: Yup.string()
    .max(20, 'Пароль должен быть меньше 20 символов')
    .min(6, 'Минимум 6 символов')
    .matches(
      /^(?=.*[a-z])|(?=.*[0-9])|(?=.*[!@#$%^&*])$/,
      'Пароль должен содержать только латинские буквы',
    )
    .required('Обязательное поле'),
});

export default schema;
