import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import * as Yup from 'yup';
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

  let schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/^[a-zA-Z0-9]$/, 'Password can only contain Latin letters.'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    if (!values.password && values.email) {
      return alert('password || email are empty');
    }
    dispatch(loginUser(values));
    resetForm();
  };
  const navi = () => {
    navigate('/registration');
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
        <Button
          type="button"
          onClick={() => {
            navi();
          }}
        >
          REGISTER
        </Button>
      </StyledForm>
    </Formik>
  );
};
