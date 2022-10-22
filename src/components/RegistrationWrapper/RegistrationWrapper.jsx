import { Section, Backdrop, Body } from './RegistrationWrapper.styled';
import { TitleThumb } from 'components/TitleThumb';
import { useMediaQuery } from 'react-responsive';


export const RegistrationWrapper = ({children}) => {
    const isTabletOrBigScreen = useMediaQuery({ minWidth: 768 });
    return (
    <Body>
        {isTabletOrBigScreen && <TitleThumb />}
        <Backdrop>
        <Section>
            {children}
        </Section>
        </Backdrop>
    </Body>
    )
}