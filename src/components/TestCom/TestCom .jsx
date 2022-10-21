import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';

import Navigation from 'components/Navigation/Navigation';

import { useSelector } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';
const TestCom = () => {
  const isModalOpen = useSelector(isModalAddTransactionOpen);
  return (
    <>
      <Navigation />
      <ButtonAddTransactions />
      {isModalOpen && <ModalAddTransactions />}
    </>
  );
};

export default TestCom;
