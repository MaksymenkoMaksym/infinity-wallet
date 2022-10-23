import { ErrorBox, ErrorSvg } from "./AuthForm.styled";
import svgIcon from '../../assets/images/icons.svg';
export const AuthError = ({touched, errors, name}) => {
    
    return (
        (touched[name] && errors[name]) ? 
        (<ErrorBox>
          {errors[name]}{' '}
        <ErrorSvg>
            <use href={svgIcon + `#icon-cancel-circle`}></use>
          </ErrorSvg>
        </ErrorBox>) : null
    )
}