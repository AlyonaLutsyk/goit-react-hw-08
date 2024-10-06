import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { TextField, Button, Box } from '@mui/material';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 400,
              margin: '0 auto',
              padding: 2,
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              fullWidth
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              fullWidth
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
