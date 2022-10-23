import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import HeroBar from 'components/HeroBar';
import Table from 'components/Table';
import Loader from 'components/Loader';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import { Wrapper, DiagramBox } from './DiagramTable.styled';

import {
  getTransactionCategories,
  getTransactionsForPeriod,
} from 'redux/transactions/transactionsOperation';
import {
  selectIsLoadingTransaction,
  selectTransactionCategories,
} from 'redux/transactions/transactionsSelectors';

import timeConverter from 'utility/timeConvertor';
import useIsMobile from 'hooks/isMobile';

const DiagramTable = () => {
  const categories = useSelector(selectTransactionCategories);
  const isMobileScreen = useIsMobile();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingTransaction);
  const defaultDate = timeConverter();
  const [date, setDate] = useState(defaultDate);
  useEffect(() => {
    categories.length === 0 && dispatch(getTransactionCategories());
    dispatch(getTransactionsForPeriod(date));
  }, [dispatch, date, categories]);
  return (
    <Container>
      <Wrapper>
        {!isMobileScreen ? <HeroBar /> : <Navigation />}
        <DiagramBox>
          {isLoading ? <Loader /> : <Table setDate={setDate} />}
        </DiagramBox>
      </Wrapper>
    </Container>
  );
};

export default DiagramTable;
