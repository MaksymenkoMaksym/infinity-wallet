import { Formik, Form, Field } from "formik";
import * as yup from 'yup';

export const LoginForm = () => {

    const initialValues = {
        email: "",
        password: "",
    };

    let schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.number().required().positive().integer(),
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
            <button type="submit">REGISTER</button>
            <button type="submit">LOG IN</button>
        </Form>
    </Formik>
)} 

