import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import HeroBar from 'components/HeroBar';
import DashboardPage from 'components/DashboardPage';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';
import {
  getAllTransactions,
  getTransactionCategories,
} from 'redux/transactions/transactionsOperation';

import { Wrapper, DashboardBox } from './HomeTable.styled';

const HomeTable = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalAddTransactionOpen);
  useEffect(() => {
    dispatch(getTransactionCategories());
    dispatch(getAllTransactions());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Wrapper>
        <HeroBar />
        <DashboardBox>
          <DashboardPage />
        </DashboardBox>
      </Wrapper>
      <ButtonAddTransactions />
      {isModalOpen && <ModalAddTransactions />}
    </>
  );
};

export default HomeTable;
