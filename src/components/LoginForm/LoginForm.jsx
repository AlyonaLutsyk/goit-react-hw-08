import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';
import { TextField, Button, Box, CircularProgress } from '@mui/material';

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form autoComplete='off'>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              fullWidth
            >
              {isLoading ? <CircularProgress size={24} /> : 'Log In'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
