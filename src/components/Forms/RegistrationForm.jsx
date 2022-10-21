import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerUser, loginUser } from 'redux/auth/authOperation';
import { validationSchemaLogin, validationSchemaRegister } from 'utility/validationSchema';

import svgIcon from '../../assets/images/icons.svg';
import {
  Input,
  Label,
  Placeholder,
  IconSvg,
  Button,
  ActiveButton,
  StyledForm,
  ErrorBox,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const { pathname } = useLocation();

  const FormDefine = () => {
    const formFields = ['email', 'password', 'confirmPassword', 'firstName'];
    switch (pathname) {
      case '/login':
        return [...formFields.slice(0, 2)];

      default:
        return [...formFields];
    }
  };
  
  function transformText (string) {
    let newSentence = [];
    [...string].map((item, index) => {
        if (index === 0) {
            newSentence.push(item.toUpperCase());
           
        } else item.toLowerCase() === item ? newSentence.push(item) : newSentence.push(" ", item.toLowerCase())
    }) 
    return newSentence.join("")
}

  const location = FormDefine().length === 4;
  const buttonTextActive = location ? 'REGISTER' : 'LOG IN';
  const buttonText = location ? 'LOG IN' : 'REGISTER';

  const dispatch = useDispatch();
  const navigate = useNavigate();



  const navi = () => {
    navigate(location ? '/login' : '/registration');
  };

  const typeVar = name => {
    switch (name) {
      case 'password':
      case 'confirmPassword':
        return 'password';
      default:
        return 'text';
    }
  };

  const onSubmit = (
    { email, password, confirmPassword: username },
    { resetForm }
  ) => {
    location
      ? dispatch(registerUser({ email, password, username }))
      : dispatch(loginUser({ email, password }));
    resetForm();
  };

  const handleClick = () => {
    navi();
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
    },
    validationSchema: location
      ? validationSchemaRegister
      : validationSchemaLogin,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <StyledForm style={{ marginTop: '60px' }} onSubmit={formik.handleSubmit}>
      {FormDefine().map(item => {
        return (
          <Label name={item} key={item}>
            <Input
              type={typeVar(item)}
              name={item}
              placeholder=" "
              {...formik.getFieldProps(item)}
            />
            <IconSvg>
              <use href={svgIcon + `#icon-${item}`}></use>
            </IconSvg>
            <Placeholder>{transformText(item)}</Placeholder>
            {formik.touched[item] && formik.errors[item] ? (
              <ErrorBox>{formik.errors[item]}</ErrorBox>
            ) : null}
          </Label>
        );
      })}

      <ActiveButton type="submit">{buttonTextActive}</ActiveButton>
      <Button type="button" onClick={handleClick}>
        {buttonText}
      </Button>
    </StyledForm>
  );
};
