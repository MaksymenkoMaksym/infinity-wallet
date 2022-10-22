
import { AuthWrapper } from "components/AuthWrapper";
import Logo from "../components/Logo/Logo";
import { AuthForm } from "components/AuthForm";
import { ToastContainer} from 'react-toastify';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toastFunction } from "utility/toastFunction";






export const RegistrationPage = () => {
    const authError = useSelector(state => state.auth.error);
    const transactionError = useSelector(state => state.transactions.error);
    useEffect(() => {
        (authError || transactionError) && toastFunction()
        
        },[])
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
