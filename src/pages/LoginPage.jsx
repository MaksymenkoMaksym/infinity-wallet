import { LoginForm } from "components/Forms";
import { Section, Body} from './common.styled';
import Logo from 'components/Logo/Logo';
import { useMediaQuery } from 'react-responsive';
import { TitleThumb } from 'components/TitleThumb/TitleThumb';
import { BackdropBox } from 'components/Backdrop/BackDrop';

export const LoginPage = () => {
    const isBigScreen = useMediaQuery({ minWidth: 1280 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1279 })
    const isTabletOrBigScreen = useMediaQuery({minWidth: 768})
const icon = "#frame-1";
    return (
<>
<Body >
    {isTabletOrBigScreen && <TitleThumb icon={icon}/>}
    {isBigScreen && <BackdropBox Form ={LoginForm}/>}
    {isTabletOrMobile && <Section>
                <Logo/>
                <LoginForm/>
                </Section>} 

</Body>

</>
)}