import { Section, Backdrop, Body } from './AuthWrapper.styled';
import { TitleThumb } from 'components/TitleThumb';
import { useMediaQuery } from 'react-responsive';


export const AuthWrapper = ({children}) => {
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