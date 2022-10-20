import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

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
import { loginUser } from 'redux/auth/authOperation';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.number().required().positive().integer(),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (!values.password && values.email) {
      return alert('password || email are empty');
    }
    dispatch(loginUser(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={schema}
    >
      <StyledForm>
        <Label name="email">
          <Input type="email" name="email" placeholder=" " />
          <IconSvg className="svg">
            <use href={svgIcon + `#icon-email`}></use>
          </IconSvg>
          <Placeholder className="placeholder">E-mail</Placeholder>
        </Label>
        <Label name="password">
          <Input type="password" name="password" placeholder=" " />
          <IconSvg className="svg">
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder className="placeholder">Password</Placeholder>
        </Label>
        <ActiveButton type="submit">LOG IN</ActiveButton>
        <Button type="button" onClick={navigate('/registration')}>
          REGISTER
        </Button>
      </StyledForm>
    </Formik>
  );
};
