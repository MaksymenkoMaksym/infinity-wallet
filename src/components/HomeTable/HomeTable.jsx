import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< Updated upstream

=======
import { ToastContainer } from 'react-toastify';
import { useError } from 'utility/hoooks';
>>>>>>> Stashed changes
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
  const dispatch = useDispatch();
  const isCategories = useSelector(selectTransactionCategories);
  const isModalOpen = useSelector(isModalAddTransactionOpen);

  isCategories.length === 0 && dispatch(getTransactionCategories());
  useEffect(() => {
    // console.log(isCategories);
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
<<<<<<< Updated upstream
=======
      <ToastContainer />
>>>>>>> Stashed changes
    </Container>
  );
};

export default HomeTable;
