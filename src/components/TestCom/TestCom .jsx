// import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
// import React from 'react';
import Navigation from 'components/Navigation/Navigation';

import { RegistrationPage, LoginPage } from '../../pages';
import TestModal from 'components/TestModal';
const TestCom = () => {
  return (
    <>
      {/* <ButtonAddTransactions />
      <ModalAddTransactions /> */}
      <Navigation />
      <RegistrationPage />
      <LoginPage />
      <TestModal />
      <span>spa span </span>
    </>
  );
};

export default TestCom;
