import { useSelector, useDispatch } from 'react-redux';

import {
  Sum,
  UlTitle,
  DivTablet,
  PList,
  LiTablet,
  PName,
} from './DashboardPage.styled';
import { TransactionSerializer } from './TransactionSerializer';
import { selectTransactions } from '../../redux/transactions/transactionsSelectors';
const LaptopDashboard = () => {
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();

  console.log(transactions);
  return (
    <>
      <LiTablet>
        <UlTitle>
          <PName>Date</PName>
          <PName>Type</PName>
          <PName>Category</PName>
          <PName>Comment</PName>
          <PName>Sum</PName>
          <PName>Balance</PName>
        </UlTitle>
        {TransactionSerializer.map(item => {
          return (
            <DivTablet key={item.id}>
              <PList>{item.transactionDate}</PList>
              <PList>{item.type === 'INCOME' ? '+' : '-'}</PList>
              <PList>{item.categoryId}</PList>
              <PList>{item.comment}</PList>
              <PList>
                <Sum transaction={item.type}>{item.amount}</Sum>
              </PList>
              <PList>{item.balanceAfter}</PList>
            </DivTablet>
          );
        })}
      </LiTablet>
    </>
  );
};
export default LaptopDashboard;
