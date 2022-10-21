import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from 'components/Navigation/Navigation';
import Table from 'components/Table';
import React from 'react';
import { getTransactionsForPeriod } from 'redux/transactions/transactionsOperation';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';
import Loader from 'components/Loader';

const DiagramPage = () => {
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
      <Navigation />
      <h1>Statistics</h1>
      {isLoading ? <Loader /> : <Table />}
    </>
  );
};

export default DiagramPage;
