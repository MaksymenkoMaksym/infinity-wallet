import {RegistrationForm} from '../components/Forms';
import { Section, Body} from './common.styled';
import Logo from 'components/Logo/Logo';
import { TitleThumb } from 'components/TitleThumb/TitleThumb';
import { useMediaQuery } from 'react-responsive';
import { BackdropBox } from 'components/Backdrop/BackDrop';



export const RegistrationPage = () => {
const isBigScreen = useMediaQuery({ minWidth: 1280 })
const isTabletOrMobile = useMediaQuery({ maxWidth: 1279 })
const isTabletOrBigScreen = useMediaQuery({minWidth: 768})
// const isMobile = useMediaQuery({maxWidth: 480})
// const isRetina = useMediaQuery({ minResolution: 2})

    return (
        <>
    <Body >
        {isTabletOrBigScreen && <TitleThumb/>}
        {isBigScreen && <BackdropBox/>}
        {isTabletOrMobile && <Section>
                <Logo/>
                <RegistrationForm/>
                </Section>}   

    </Body>
    
    </>
)}