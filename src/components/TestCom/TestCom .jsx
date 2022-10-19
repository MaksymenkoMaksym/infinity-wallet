import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';

import Navigation from 'components/Navigation/Navigation';

import { RegistrationPage, LoginPage } from '../../pages';
import TestModal from 'components/TestModal';
import DashboardPage from '../DashboardPage';
const TestCom = () => {
  return (
    <>
      <DashboardPage />
      <ButtonAddTransactions />
      {/* <ModalAddTransactions /> */}
      <Navigation />
      <RegistrationPage />
      <LoginPage />
      <TestModal />
      <span>spa span </span>
    </>
  );
};

export default TestCom;
