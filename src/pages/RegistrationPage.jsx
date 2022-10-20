import {RegistrationForm} from '../components/Forms';
import { Body} from './common.styled';

import { TitleThumb } from 'components/TitleThumb/TitleThumb';
import { useMediaQuery } from 'react-responsive';
import { BackdropBox } from 'components/Backdrop/BackDrop';



export const RegistrationPage = () => {
const isBigScreen = useMediaQuery({ minWidth: 1280 })
const isTabletOrMobile = useMediaQuery({ maxWidth: 1279 })
const isTabletOrBigScreen = useMediaQuery({minWidth: 768})
// const isMobile = useMediaQuery({maxWidth: 480})
// const isRetina = useMediaQuery({ minResolution: 2})
// const icon = "#frame-2";

    return (
        <>
    <Body >
        {isTabletOrBigScreen && <TitleThumb />}
        {isBigScreen && <BackdropBox Form={RegistrationForm}/>}
        {isTabletOrMobile && <BackdropBox Form={RegistrationForm}/>}   

    </Body>
    
    </>
)}