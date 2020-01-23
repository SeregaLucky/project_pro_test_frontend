import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Невалидный e-mail')
    .required('Обязательное поле'),
  password: Yup.string()
    .max(20, 'Пароль должен быть меньше 20 символов')
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
});

export default schema;
