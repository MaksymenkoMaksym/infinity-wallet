import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';

import { registerUser } from 'redux/auth/authOperation';
import * as yup from 'yup';
import svgIcon from '../../assets/images/icons.svg';
import {
  Input,
  Label,
  Placeholder,
  IconSvg,
  Button,
  ActiveButton,
  StyledForm,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = ({firstName: username, email, password, confirmPassword}, { resetForm }) => {
    if (password !== confirmPassword) {
      return alert('password !== confirmPassword');
    }
    dispatch(registerUser({username, email, password}));
    resetForm();
  };
  const navi = () => {
    navigate('/login');
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm style={{ marginTop: '60px' }}>
        <Label name="email">
          <Input type="email" name="email" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-email`}></use>
          </IconSvg>
          <Placeholder>E-mail</Placeholder>
        </Label>

        <Label name="password">
          <Input type="password" name="password" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder>Password</Placeholder>
        </Label>
        <Label name="confirmPassword">
          <Input type="password" name="confirmPassword" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder>Confirm password</Placeholder>
        </Label>
        <Label name="firstName">
          <Input type="text" name="firstName" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-account_box`}></use>
          </IconSvg>
          <Placeholder>First name</Placeholder>
        </Label>
        <ActiveButton type="submit">REGISTER</ActiveButton>
        <Button
          type="button"
          onClick={() => {
            navi();
          }}
        >
          LOG IN
        </Button>
      </StyledForm>
    </Formik>
  );
};
