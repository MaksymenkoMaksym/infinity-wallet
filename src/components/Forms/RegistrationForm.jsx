import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Formik, ErrorMessage } from 'formik';

import { registerUser } from 'redux/auth/authOperation';
import * as Yup from 'yup';
import svgIcon from '../../assets/images/icons.svg';
import {
  Input,
  Label,
  Placeholder,
  IconSvg,
  Button,
  ActiveButton,
  StyledForm, ErrorBox
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

  let schema = Yup.object().shape({
    email: Yup.string().email("incorrect email").required("missing email"),
    password: Yup.string()
      .min(6, 'password should be 8 chars minimum').max(12, 'password should be 12 chars maximum')
      .required("missing password"),
    firstName: Yup.string()
    .min(1).max(12, 'first name should be 12 chars maximum.')
    .required("missing first name")
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
          <Input type="text" name="email" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-email`}></use>
          </IconSvg>
          <Placeholder>E-mail</Placeholder>
          <ErrorMessage name="email" component={ErrorBox}/>
        </Label>

        <Label name="password">
          <Input type="password" name="password" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder>Password</Placeholder>
          <ErrorMessage name="password" component={ErrorBox}/>
        </Label>
        <Label name="confirmPassword">
          <Input type="password" name="confirmPassword" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder>Confirm password</Placeholder>
          <ErrorMessage name="password" component={ErrorBox}/>
        </Label>
        <Label name="firstName">
          <Input type="text" name="firstName" placeholder=" " />
          <IconSvg>
            <use href={svgIcon + `#icon-account_box`}></use>
          </IconSvg>
          <Placeholder>First name</Placeholder>
          <ErrorMessage name="firstName" component={ErrorBox}/>
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
