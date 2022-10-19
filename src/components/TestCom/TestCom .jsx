import Navigation from 'components/Navigation/Navigation';

import React from 'react';
import CurrencyPage from 'pages/CurrencyPage';

import { RegistrationPage, LoginPage } from '../../pages';
import TestModal from 'components/TestModal';
const TestCom = () => {
  return (
    <>
      <Navigation />
      <CurrencyPage />
      <RegistrationPage />
      <LoginPage />
      <TestModal />
      <span>spa span </span>
    </>
  );
};

export default TestCom;
