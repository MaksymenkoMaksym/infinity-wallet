import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerUser, loginUser } from 'redux/auth/authOperation';
import {ProgressBar} from "../ProgressBar";
import {
  validationSchemaLogin,
  validationSchemaRegister,
} from 'utility/validationSchema';

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
  ErrorSvg,
} from './Form.styled';


export const Form = () => {

  const { pathname } = useLocation();
  const { authType } = useParams();

  const FormDefine = () => {
    const formFields = ['email', 'password', 'confirmPassword', 'firstName'];
    switch (authType) {
      case 'login':
        return [...formFields.slice(0, 2)];

      default:
        return [...formFields];
    }
  };

  function transformText(string) {
    let newSentence = [];
    [...string].forEach((item, index) => {
      if (index === 0) {
        newSentence.push(item.toUpperCase());
      } else
        item.toLowerCase() === item
          ? newSentence.push(item)
          : newSentence.push(' ', item.toLowerCase());
    });
    return newSentence.join('');
  }

  const location = FormDefine().length === 4;
  const buttonTextActive = authType === 'login' ? 'REGISTER' : 'LOG IN';
  const buttonText = authType === 'login' ? 'LOG IN' : 'REGISTER';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navi = () => {
    navigate(authType === 'login' ? '/auth/registration' : '/auth/login');
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
    { email, password, firstName: username },
    { resetForm }
  ) => {
    authType === 'login'
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
    validationSchema: authType === 'login'
      ? validationSchemaLogin
      : validationSchemaRegister,
    onSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  });
  console.log(formik)

function checkedOnEmpty () {
  return formik.values.password != 0 && formik.values.confirmPassword != 0
}
function checkedCoincidence () {
    return formik.values.password.slice(0, formik.values.confirmPassword.length) === formik.values.confirmPassword;
  }

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
              autoComplete="true"
            />
            <IconSvg>
              <use href={svgIcon + `#icon-${item}`}></use>
            </IconSvg>
            <Placeholder>{transformText(item)}</Placeholder>
            {formik.touched[item] && formik.errors[item] ? (
              <ErrorBox>
                {formik.errors[item]}{' '}
                <ErrorSvg>
                  <use href={svgIcon + `#icon-cancel-circle`}></use>
                </ErrorSvg>
              </ErrorBox>
            ) : null}
            {(item === "confirmPassword" && checkedOnEmpty()) && (checkedCoincidence() ? <ProgressBar values = {formik.values}/> : <ErrorBox>Your passwords do not match</ErrorBox>)}
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

export default Form;
