import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import { ToastContainer } from 'react-toastify';
import { useError } from 'utility/hoooks';

import HeroBar from 'components/HeroBar';
import DashboardPage from '../DashboardPage/DashboardPage';
import Container from 'components/Container';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import {
  isModalAddTransactionOpen,
  selectTransactionCategories,
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
  const isCategories = useSelector(selectTransactionCategories);
  const isModalOpen = useSelector(isModalAddTransactionOpen);

<<<<<<< Updated upstream
  isCategories.length === 0 && dispatch(getTransactionCategories());
  useEffect(() => {
    // console.log(isCategories);
=======
  const categories = useSelector(selectTransactionCategories);
  useEffect(() => {
    categories.length === 0 && dispatch(getTransactionCategories());
>>>>>>> Stashed changes
    dispatch(getAllTransactions());
  }, [dispatch, categories]);
  const onClickOpenModalAction = () => {
    dispatch(openModal());
    // console.log(categories);
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
