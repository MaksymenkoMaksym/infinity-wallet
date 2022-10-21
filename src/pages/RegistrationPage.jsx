import { Section, Backdrop } from '../pages/common.styled';
import Logo from 'components/Logo/Logo';
import { Body } from './common.styled';
import { TitleThumb } from 'components/TitleThumb/TitleThumb';
import { useMediaQuery } from 'react-responsive';
import RegistrationForm from 'components/Form/Form';

export const RegistrationPage = () => {
  const isTabletOrBigScreen = useMediaQuery({ minWidth: 768 });

  return (
    <Body>
      {isTabletOrBigScreen && <TitleThumb />}
      <Backdrop>
        <Section>
          <Logo />
          <RegistrationForm />
        </Section>
      </Backdrop>
    </Body>
  );
};
