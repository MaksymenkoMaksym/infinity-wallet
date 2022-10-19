import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import MediaQuery from 'react-responsive';
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
    </>
  );
};

export default TestCom;
