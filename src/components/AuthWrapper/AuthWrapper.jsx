import { Section, Backdrop, Body } from './AuthWrapper.styled';
import { TitleThumb } from 'components/TitleThumb';
import useIsMobile from 'hooks/isMobile';

export const AuthWrapper = ({children}) => {
    const isMobile = useIsMobile()

    return (
    <Body>
        {!isMobile && <TitleThumb />}
        <Backdrop>
        <Section>
            {children}
        </Section>
        </Backdrop>
    </Body>
    )
}