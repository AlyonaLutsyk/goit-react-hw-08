import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
      {() => (
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" required />
          </label>
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" required />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" required />
          </label>
          <button className={css.button} type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
