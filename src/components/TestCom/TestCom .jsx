import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';

import Navigation from 'components/Navigation/Navigation';

import { RegistrationPage, LoginPage } from '../../pages';
import ModalLogout from 'components/ModalLogout';
import DashboardPage from '../DashboardPage';
import { useSelector } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';
const TestCom = () => {
  const isModalOpen = useSelector(isModalAddTransactionOpen);
  return (
    <>
      <DashboardPage />
      <ButtonAddTransactions />
      {isModalOpen && <ModalAddTransactions />}
      <Navigation />
      <RegistrationPage />
      <LoginPage />
      <ModalLogout />
      <span>spa span </span>
    </>
  );
};

export default TestCom;
