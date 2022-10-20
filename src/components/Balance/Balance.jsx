import React, { useEffect } from 'react';
import { Container, Title, Sum } from './Balance.styled';

import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/authOperation';
import { selectBalance } from '../../redux/auth/authSelectors';
import { selectTransactions } from '../../redux/transactions/transactionsSelectors';

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, transactions]);

  return (
    <Container>
      <Title>YOUR BALANCE</Title>
      {/* <Sum>&#8372; 24000.00</Sum> */}
      <Sum>&#8372; {balance}</Sum>
    </Container>
  );
};

export default Balance;
