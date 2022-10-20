import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';

import Navigation from 'components/Navigation/Navigation';

import { useSelector } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';
import Header from 'components/Header';
const TestCom = () => {
  const isModalOpen = useSelector(isModalAddTransactionOpen);
  return (
    <>
      <Header />
      <Navigation />
      <ButtonAddTransactions />
      {isModalOpen && <ModalAddTransactions />}
    </>
  );
};

export default TestCom;
