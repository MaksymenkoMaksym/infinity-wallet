import { Formik, Form, Field } from "formik";
import * as yup from 'yup';

export const RegisterForm = () => {
const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
};

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.number().required().positive().integer(),
    confirmPassword: yup.number().required().positive().integer(),
    firstName: yup.string().required(),
});

const handleSubmit = (values, {resetForm}) => {
console.log(values)
resetForm()
}
    return (
    <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={schema}
    >
        <Form>
            <Field type="email" name="email" placeholder="E-mail"/>
            <Field type="password" name="password" placeholder="Password"/>
            <Field type="password" name="confirmPassword" placeholder="Confirm password"/>
            <Field type="text" name="firstName" placeholder="First name"/>
            <button type="submit">REGISTER</button>
            <button type="submit">LOG IN</button>
        </Form>
    </Formik>
)} 

