import {RegistrationForm} from '../components/Forms';
import { Section } from './common.styled';
import Logo from 'components/Logo/Logo';
import { useMediaQuery } from 'react-responsive'


export const RegistrationPage = () => {
const isBigScreen = useMediaQuery({ minWidth: 1200 })
const isTabletOrMobile = useMediaQuery({ maxWidth: 768 })
const isMobile = useMediaQuery({maxWidth: 480})
const isRetina = useMediaQuery({ minResolution: 2})

    return (
    <div>
        <Section>
            <Logo/>
            <RegistrationForm/>
        </Section>
    </div>
)}