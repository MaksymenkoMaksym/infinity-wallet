import Navigation from 'components/Navigation/Navigation';

import { RegistrationPage, LoginPage } from '../../pages';
import TestModal from 'components/TestModal';
const TestCom = () => {
  return (
    <>
      <Navigation />
      <RegistrationPage />
      <LoginPage />
      <TestModal />
      <span>spa span </span>
    </>
  );
};

export default TestCom;
