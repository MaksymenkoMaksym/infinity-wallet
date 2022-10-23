import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loginUser, registerUser } from 'redux/auth/authOperation';
import {
  LoginInitValues,
  RegInitValues,
  LoginOptions,
  RegOptions,
} from 'utility/constants';
import {
  validationSchemaLogin,
  validationSchemaRegister,
} from 'utility/validationSchema';

import svgIcon from '../../assets/images/icons.svg';
import { AuthConfirmError } from './AuthConfirmError';
import { AuthError } from './AuthError';
import {
  Link,
  Button,
  IconSvg,
  Input,
  Label,
  Placeholder,
  StyledForm,
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
    validationSchema: location
      ? validationSchemaLogin
      : validationSchemaRegister,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  });

  const { resetForm, touched, errors, values } = formik;
  useEffect(() => {
    resetForm();
  }, [location, resetForm]);

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {(location ? LoginOptions : RegOptions).map(({ name, type, label }) => {
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
            {name !== 'confirmPassword' ? (
              <AuthError touched={touched} errors={errors} name={name} />
            ) : (
              <AuthConfirmError
                touched={touched}
                errors={errors}
                name={name}
                values={values}
              />
            )}
          </Label>
        );
      })}

      <Button type="submit">{buttonTextActive}</Button>
      <Link to={location ? '/auth/registration' : '/auth/login'}>
        {linkText}
      </Link>
    </StyledForm>
  );
};

export default AuthForm;
