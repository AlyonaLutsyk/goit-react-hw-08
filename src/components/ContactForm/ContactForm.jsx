import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum number of characters is 3')
      .max(50, 'Maximum number of characters is 50')
      .required('This field is required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format 000-000-0000')
      .required('This field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">Name</label>
        <Field className={css.input} id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label className={css.label} htmlFor="number">Number</label>
        <Field className={css.input} id="number" name="number" type="text" />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
}
