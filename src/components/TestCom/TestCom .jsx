import Navigation from 'components/Navigation/Navigation';

import React from 'react';
import CurrencyPage from 'pages/CurrencyPage';

import { RegistrationPage, LoginPage } from '../../pages';
import TestModal from 'components/TestModal';
import DashboardPage from '../DashboardPage';
const TestCom = () => {
  return (
    <>
      <DashboardPage />
      <Navigation />
      <CurrencyPage />
      <RegistrationPage />
      <LoginPage />
      <TestModal />
    </>
  );
};

export default TestCom;
