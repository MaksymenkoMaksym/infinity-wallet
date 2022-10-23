import { ErrorBox, ErrorSvg } from "./AuthForm.styled";
import svgIcon from '../../assets/images/icons.svg';
import { ProgressBar } from "components/ProgressBar/ProgressBar";
import { AuthError } from "./AuthError";

export const AuthConfirmError = ({touched, errors, name, values}) => {

    function checkedCoincidence() {
        return (
          values.password.slice(0, values.confirmPassword.length) === values.confirmPassword
        );
      }

      function checkedOnEmpty() {
        return values.password != 0 && values.confirmPassword != 0;
      }

    return (
       ( checkedOnEmpty() &&  checkedCoincidence()) ? <ProgressBar name={name} values={values}/> : <AuthError touched={touched} errors={errors} name={name}/>
    )
}