
import { AuthWrapper } from "components/AuthWrapper";
import Logo from "../components/Logo/Logo";
import { AuthForm } from "components/AuthForm";
import { ToastContainer} from 'react-toastify';
import { useError } from "../hooks/useError";
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationPage = () => {
useError()
        return (
            <>
            <AuthWrapper>
                <Logo />
                <AuthForm />
            </AuthWrapper>
            <ToastContainer/>
            </>

        )


};

export default RegistrationPage;
