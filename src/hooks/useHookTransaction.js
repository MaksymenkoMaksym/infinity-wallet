import { useSelector } from 'react-redux';
import {
  selectTransactionCategories,
  selectTransactionsForPeriod,
  selectTransactions,
} from 'redux/transactions/transactionsSelectors';

export const useHookTransaction = () => {
  const transactions = useSelector(selectTransactions);
  const forPeriod = useSelector(selectTransactionsForPeriod);
  const categories = useSelector(selectTransactionCategories);

  return {
    transactions,
    forPeriod,
    categories,
  };
};
