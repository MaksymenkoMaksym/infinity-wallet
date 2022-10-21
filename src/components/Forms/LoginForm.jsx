import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';

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
  ErrorBox
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
    email: Yup.string().email("incorrect email").required("missing email"),
    password: Yup.string()
      .min(6, 'password should be 8 chars minimum.').max(12, 'password should be 12 chars maximum.')
      .required("missing password"),
  });

  const handleSubmit = (values, { resetForm }) => {

    dispatch(loginUser(values));
    resetForm();
  };
  const navi = () => {
    navigate('/registration');
  };
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={handleSubmit}
    validationSchema={schema}
    validateOnChange= {false}
    validateOnBlur = {false}
    >
      {props => (<StyledForm >
        <Label name="email">
          <Input type="text" name="email" placeholder=" " />
          <IconSvg className="svg">
            <use href={svgIcon + `#icon-email`}></use>
          </IconSvg>
          <Placeholder className="placeholder">E-mail</Placeholder>
          <ErrorMessage name="email" component={ErrorBox}/>
        </Label>
        <Label name="password">
          <Input type="password" name="password" placeholder=" " />
          <IconSvg className="svg">
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder className="placeholder">Password</Placeholder>
          <ErrorMessage name="password" component={ErrorBox}/>
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
      </StyledForm>  )}
    </Formik>
  );
};
