import * as Yup from 'yup';

export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().email('Incorrect email').required('Missing email'),
    password: Yup.string()
      .min(6, 'Password should be 8 chars minimum')
      .max(12, 'Password should be 12 chars maximum')
      .required('Missing password'),
  });

export const validationSchemaRegister = Yup.object()
    .shape({
      confirmPassword: Yup.string()
        .min(6, 'Password should be 8 chars minimum')
        .max(12, 'Password should be 12 chars maximum')
        .required('Missing confirm password'),
      firstName: Yup.string()
        .min(1)
        .max(12, 'First name should be 12 chars maximum.')
        .required('Missing first name'),
    })
    .concat(validationSchemaLogin);