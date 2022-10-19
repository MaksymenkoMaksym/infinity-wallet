import { LoginForm } from "components/Forms";
import { Section, Body} from './common.styled';
import Logo from 'components/Logo/Logo';
import { useMediaQuery } from 'react-responsive';
import { TitleThumb } from 'components/TitleThumb/TitleThumb';

export const LoginPage = () => {
const isTabletOrBigScreen = useMediaQuery({minWidth: 768})

    return (
<>
<Body >
    {isTabletOrBigScreen && <TitleThumb/>}
    <Section>
        <Logo/>
        <LoginForm/>
    </Section>

</Body>

</>
)}