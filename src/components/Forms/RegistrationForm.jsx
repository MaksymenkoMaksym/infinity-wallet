import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useFormik} from 'formik';

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

  let validationSchema = Yup.object().shape({
    email: Yup.string().email("incorrect email").required("missing email"),
    password: Yup.string()
      .min(6, 'password should be 8 chars minimum').max(12, 'password should be 12 chars maximum')
      .required("missing password"),
    confirmPassword: Yup.string()
      .min(6, 'password should be 8 chars minimum').max(12, 'password should be 12 chars maximum')
      .required("missing password"),
    firstName: Yup.string()
    .min(1).max(12, 'first name should be 12 chars maximum.')
    .required("missing first name")
  });

  const onSubmit = ({firstName: username, email, password, confirmPassword}, { resetForm }) => {
    if (password !== confirmPassword) {
      return alert('password !== confirmPassword');
    }
    dispatch(registerUser({username, email, password}));
    resetForm();
  };
  const navi = () => {
    navigate('/login');
  };


    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
      },
      validationSchema,
      onSubmit,
      validateOnChange: false,
      validateOnBlur: false,
    })


    return (
      <StyledForm style={{ marginTop: '60px' }} onSubmit={formik.handleSubmit}>
        <Label name="email">
          <Input type="text" name="email" placeholder=" " {...formik.getFieldProps("email")}/>
          <IconSvg >
            <use href={svgIcon + `#icon-email`}></use>
          </IconSvg>
          <Placeholder>E-mail</Placeholder>
          {formik.touched.email && formik.errors.email ? (<ErrorBox>{formik.errors.email}</ErrorBox>) : null}
        </Label>

        <Label name="password">
          <Input type="password" name="password" placeholder=" " {...formik.getFieldProps("password")}/>
      
          <IconSvg>
            
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder>Password</Placeholder>
          {formik.touched.password && formik.errors.password ? (<ErrorBox>{formik.errors.password}</ErrorBox>) : null}
        </Label>
        <Label name="confirmPassword">
          <Input type="password" name="confirmPassword" placeholder=" " {...formik.getFieldProps("confirmPassword")}/>
          <IconSvg>
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          <Placeholder>Confirm password</Placeholder>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<ErrorBox>{formik.errors.confirmPassword}</ErrorBox>) : null}
        </Label>
        <Label name="firstName">
          <Input type="text" name="firstName" placeholder=" " {...formik.getFieldProps("firstName")}/>
          <IconSvg>
            <use href={svgIcon + `#icon-account_box`}></use>
          </IconSvg>
          <Placeholder>First name</Placeholder>
          {formik.touched.firstName && formik.errors.firstName ? (<ErrorBox>{formik.errors.firstName}</ErrorBox>) : null}
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

  );
};
