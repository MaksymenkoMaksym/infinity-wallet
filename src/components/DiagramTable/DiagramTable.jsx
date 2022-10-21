import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Header from 'components/Header';
import HeroBar from 'components/HeroBar';
import Table from 'components/Table';
import Loader from 'components/Loader';
import { Wrapper, DiagramBox } from './DiagramTable.styled';

import { getTransactionsForPeriod } from 'redux/transactions/transactionsOperation';
import { selectIsLoadingTransaction } from 'redux/transactions/transactionsSelectors';
import timeConverter from 'utility/timeConvertor';

const DiagramTable = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingTransaction);
  const defaultDate = timeConverter();
  const [date, setDate] = useState(defaultDate);
  useEffect(() => {
    dispatch(getTransactionsForPeriod(date));
  }, [dispatch, date]);
  return (
    <>
      <Header />
      <Wrapper>
        <HeroBar />
        <DiagramBox>
          {isLoading ? <Loader /> : <Table setDate={setDate} />}
        </DiagramBox>
      </Wrapper>
    </>
  );
};

export default DiagramTable;
