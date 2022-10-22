
import { RegistrationWrapper } from "components/RegistrationWrapper";
import Logo from "../components/Logo/Logo";
import { AuthForm } from "components/AuthForm";




export const RegistrationPage = () => {
        return (
            <RegistrationWrapper>
                <Logo />
                <AuthForm />
            </RegistrationWrapper>
        )


};

export default RegistrationPage;
