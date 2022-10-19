import {RegistrationForm} from '../components/Forms';
import { Section, Body } from './common.styled';
import Logo from 'components/Logo/Logo';
import { TitleThumb } from 'components/TitleThumb/TitleThumb';
import { useMediaQuery } from 'react-responsive'


export const RegistrationPage = () => {
const isBigScreen = useMediaQuery({ minWidth: 1200 })
const isTabletOrMobile = useMediaQuery({ maxWidth: 768 })
const isTabletOrBigScreen = useMediaQuery({minWidth: 768})
const isMobile = useMediaQuery({maxWidth: 480})
const isRetina = useMediaQuery({ minResolution: 2})

    return (
    <Body >
        {isTabletOrBigScreen && <TitleThumb/>}
        <Section>
            <Logo/>
            <RegistrationForm/>
        </Section>
    </Body>
)}