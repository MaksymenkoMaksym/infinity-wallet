import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { loginUser, registerUser } from 'redux/auth/authOperation';
import { LoginInitValues, RegInitValues, LoginOptions, RegOptions } from 'utility/constants';
import {
  validationSchemaLogin,
  validationSchemaRegister
} from 'utility/validationSchema';

import svgIcon from '../../assets/images/icons.svg';
import {
  Link, Button, ErrorBox,
  ErrorSvg, IconSvg, Input,
  Label,
  Placeholder, StyledForm
} from './AuthForm.styled';

export const AuthForm = () => {
  const { authType } = useParams();
  const location = authType === 'login';

  const buttonTextActive = location ? 'LOG IN' : 'REGISTER';
  const linkText = location ? 'REGISTER' : 'LOG IN';

  const dispatch = useDispatch();

  const onSubmit = (
    { email, password, firstName: username },
    { resetForm }
  ) => {
    location
      ? dispatch(loginUser({ email, password }))
      : dispatch(registerUser({ email, password, username }));
    resetForm();
  };

  const formik = useFormik({
    initialValues: location ? LoginInitValues : RegInitValues,
    validationSchema: (location ? validationSchemaLogin : validationSchemaRegister),
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  });

  const{ resetForm, touched, errors} = formik

  // function checkedOnEmpty() {
  //   return formik.values.password !== 0 && formik.values.confirmPassword !== 0;
  // }
  // function checkedCoincidence() {
  //   return (
  //     formik.values.password.slice(0, formik.values.confirmPassword.length) ===
  //     formik.values.confirmPassword
  //   );
  // }
  useEffect(()=> {
resetForm()
  }, [location, resetForm])

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {(location ? LoginOptions : RegOptions).map(({name, type, label}) => {
        return (
          <Label name={name} key={name}>
            <Input
              type={type}
              name={name}
              placeholder=" "
              {...formik.getFieldProps(name)}
           
            />
            <IconSvg>
              <use href={svgIcon + `#icon-${name}`}></use>
            </IconSvg>
            <Placeholder>{label}</Placeholder>
            {touched[name] && errors[name] ? (
              <ErrorBox>
                {errors[name]}{' '}
                <ErrorSvg>
                  <use href={svgIcon + `#icon-cancel-circle`}></use>
                </ErrorSvg>
              </ErrorBox>
            ) : null}
            {/* {item === 'confirmPassword' &&
              checkedOnEmpty() &&
              (checkedCoincidence() ? (
                <ProgressBar values={formik.values} />
              ) : (
                <ErrorBox>Your passwords do not match</ErrorBox>
              ))} */}
          </Label>
        );
      })}

      <Button type="submit">{buttonTextActive}</Button>
      <Link  to ={location ? '/auth/registration' : '/auth/login'}>
        {linkText}
      </Link>
    </StyledForm>
  );
};

export default AuthForm;
