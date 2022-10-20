import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik, ErrorMessage } from 'formik';

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

  
  const navi = () => {
    navigate('/registration');
  };

 const validationSchema = Yup.object().shape({
    email: Yup.string().email("incorrect email").required("missing email"),
    password: Yup.string()
      .min(6, 'password should be 8 chars minimum.').max(12, 'password should be 12 chars maximum.')
      .required("missing password"),
  });
   
const onSubmit = (values, { resetForm }) => {
  dispatch(loginUser(values));
  resetForm();
};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
   initialValues: {
    email: '',
    password: '',
  },
    validationSchema,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false,
})




  return (
    <StyledForm onSubmit={formik.handleSubmit}>
        <Label name="email">
          <Input type="text" name="email" placeholder=" " {...formik.getFieldProps("email")}/>
          <IconSvg errorColor={formik.errors.email}>
            <use href={svgIcon + `#icon-email`}></use>
          </IconSvg>
          {formik.touched.email && formik.errors.email ? (<ErrorBox>{formik.errors.email}</ErrorBox>) : null}
          <Placeholder >E-mail</Placeholder>

        </Label>
        <Label name="password">
          <Input type="password" name="password" placeholder=" " {...formik.getFieldProps("password")}/>
          <IconSvg >
            <use href={svgIcon + `#icon-lock`}></use>
          </IconSvg>
          {formik.touched.password && formik.errors.password ? (<ErrorBox>{formik.errors.password}</ErrorBox>) : null}
          <Placeholder >Password</Placeholder>

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
  );
};
