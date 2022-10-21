import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import HeroBar from 'components/HeroBar';
import Table from 'components/Table';

import { getTransactionsForPeriod } from 'redux/transactions/transactionsOperation';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';

import Loader from 'components/Loader';

import { Wrapper, DiagramBox } from './DiagramTable.styled';

const DiagramTable = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingTransaction);
  useEffect(() => {
    const defaultPeriod = {
      month: 10,
      year: 2022,
    };
    dispatch(getTransactionsForPeriod(defaultPeriod));
  }, [dispatch]);
  return (
    <>
      <Header />
      <Wrapper>
        <HeroBar />
        <DiagramBox>{isLoading ? <Loader /> : <Table />}</DiagramBox>
      </Wrapper>
    </>
  );
};

export default DiagramTable;
