import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/Header';
import Navigation from 'components/Navigation/Navigation';
import Table from 'components/Table';
import React from 'react';
import { getTransactionsForPeriod } from 'redux/transactions/transactionsOperation';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';
import Loader from 'components/Loader';
import timeConverter from 'utility/timeConvertor';

const DiagramPage = () => {
  const defaultDate = timeConverter();
  console.log('defaultDate', defaultDate);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingTransaction);
  const [date, setDate] = useState(defaultDate);
  useEffect(() => {
    dispatch(getTransactionsForPeriod(date));
  }, [dispatch, date]);
  return (
    <>
      <Header />
      <Navigation />
      <h1>Statistics</h1>
      {isLoading ? <Loader /> : <Table setDate={setDate} />}
    </>
  );
};

export default DiagramPage;
