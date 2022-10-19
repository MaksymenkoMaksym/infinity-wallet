import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  Input,
  Label,
  Placeholder,
  Letter,
  Lock,
  Avatar,
} from './RegistrationForm.styled';

export const RegisterForm = () => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
  };

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.number().required().positive().integer(),
    confirmPassword: yup.number().required().positive().integer(),
    firstName: yup.string().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Label name="email">
          <Input type="email" name="email" placeholder=" " />
          <Letter className="svg" />
          <Placeholder className="placeholder">E-mail</Placeholder>
        </Label>

        <Label name="password">
          <Input type="password" name="password" placeholder=" " />
          <Lock className="svg" />
          <Placeholder className="placeholder">Password</Placeholder>
        </Label>
        <Label name="confirmPassword">
          <Input type="password" name="confirmPassword" placeholder=" " />
          <Lock className="svg" />
          <Placeholder className="placeholder">Confirm password</Placeholder>
        </Label>
        <Label name="firstName">
          <Input type="text" name="firstName" placeholder=" " />
          <Avatar className="svg" />
          <Placeholder className="placeholder">First name</Placeholder>
        </Label>
        <button
          type="submit"
          style={{ width: '100%', height: '50px', marginBottom: '40px' }}
        >
          REGISTER
        </button>
        <button
          type="submit"
          style={{ width: '100%', height: '50px', marginBottom: '40px' }}
        >
          LOG IN
        </button>
      </Form>
    </Formik>
  );
};
