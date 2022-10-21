import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeroBar from 'components/HeroBar';
import DashboardPage from 'components/DashboardPage';
import Container from 'components/Container';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';
import {
  getAllTransactions,
  getTransactionCategories,
} from 'redux/transactions/transactionsOperation';

import { Wrapper, DashboardBox } from './HomeTable.styled';
import { openModal } from 'redux/transactions/transactionsSlice';

const HomeTable = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalAddTransactionOpen);
  useEffect(() => {
    dispatch(getTransactionCategories());
    dispatch(getAllTransactions());
  }, [dispatch]);
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
    </Container>
  );
};

export default HomeTable;