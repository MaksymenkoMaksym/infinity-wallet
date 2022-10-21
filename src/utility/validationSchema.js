import * as Yup from 'yup';

export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().email('incorrect email').required('missing email'),
    password: Yup.string()
      .min(6, 'password should be 8 chars minimum')
      .max(12, 'password should be 12 chars maximum')
      .required('missing password'),
  });

export const validationSchemaRegister = Yup.object()
    .shape({
      confirmPassword: Yup.string()
        .min(6, 'password should be 8 chars minimum')
        .max(12, 'password should be 12 chars maximum')
        .required('missing confirm password'),
      firstName: Yup.string()
        .min(1)
        .max(12, 'first name should be 12 chars maximum.')
        .required('missing first name'),
    })
    .concat(validationSchemaLogin);