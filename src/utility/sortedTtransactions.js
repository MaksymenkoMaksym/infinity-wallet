import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';

const useSortedTtransactions = () => {
  const transactions = useSelector(selectTransactions);
  if (transactions.length === 0) {
    return;
  } else if (transactions.length === 1) {
    return transactions;
  } else {
    return [...transactions].sort((a, b) =>
      b.transactionDate.localeCompare(a.transactionDate)
    );
  }
};
export default useSortedTtransactions;
