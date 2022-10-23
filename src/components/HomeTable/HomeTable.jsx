import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useError } from '../../hooks/useError';
import 'react-toastify/dist/ReactToastify.css';

import HeroBar from 'components/HeroBar';
import DashboardPage from '../DashboardPage/DashboardPage';
import Container from 'components/Container';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import {
  isModalAddTransactionOpen,
  selectTransactionCategories,
  selectTransactions,
} from 'redux/transactions/transactionsSelectors';
import {
  getAllTransactions,
  getTransactionCategories,
} from 'redux/transactions/transactionsOperation';

import { Wrapper, DashboardBox } from './HomeTable.styled';
import { openModal } from 'redux/transactions/transactionsSlice';

const HomeTable = () => {
  useError();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalAddTransactionOpen);
  const categories = useSelector(selectTransactionCategories);
  const transactions = useSelector(selectTransactions);
  useEffect(() => {
    categories.length === 0 && dispatch(getTransactionCategories());
    // console.log(transactions);
    transactions.length === 0 && dispatch(getAllTransactions());
  }, [dispatch, categories, transactions]);
  const onClickOpenModalAction = () => {
    dispatch(openModal());
  };

  return (
    <Container>
      <Wrapper>
        <HeroBar />
        <DashboardBox>
          <DashboardPage />
        </DashboardBox>
        <ButtonAddTransactions
          onClickAction={onClickOpenModalAction}
          icon="plus"
        />
        {isModalOpen && <ModalAddTransactions />}
      </Wrapper>
      <ToastContainer />
    </Container>
  );
};

export default HomeTable;
