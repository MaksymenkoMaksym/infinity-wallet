import { Section, Backdrop} from '../../pages/common.styled';
import Logo from 'components/Logo/Logo';
import {RegistrationForm} from '../../components/Forms';

export const BackdropBox = () => {
    return (
    <Backdrop> 
        <Section>
            <Logo/>
            <RegistrationForm/>
        </Section>
    </Backdrop>)
}