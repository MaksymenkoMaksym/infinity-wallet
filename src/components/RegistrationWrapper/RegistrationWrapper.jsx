import { Section, Backdrop, Body } from './RegistrationWrapper.styled';
import Logo from '../Logo/Logo';
import { Form } from '../../components/Form';
import { TitleThumb } from 'components/TitleThumb/TitleThumb';
import { useMediaQuery } from 'react-responsive';


export const RegistrationWrapper = () => {
    const isTabletOrBigScreen = useMediaQuery({ minWidth: 768 });

    <Body>
    {isTabletOrBigScreen && <TitleThumb />}
    <Backdrop>
      <Section>
        <Logo />
        <Form />
      </Section>
    </Backdrop>
  </Body>
}