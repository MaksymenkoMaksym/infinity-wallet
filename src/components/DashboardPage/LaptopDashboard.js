import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  Sum,
  UlTitle,
  DivTablet,
  PList,
  LiTablet,
  PName,
  Block,
} from './DashboardPage.styled';

import {
  selectTransactions,
  selectTransactionCategories,
} from '../../redux/transactions/transactionsSelectors';

const LaptopDashboard = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);

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
        <Block>
          {transactions.map(item => {
            return (
              <DivTablet key={item.id}>
                <PList>
                  {format(new Date(item.transactionDate), 'dd.MM.yy')}
                </PList>
                <PList>{item.type === 'INCOME' ? '+' : '-'}</PList>

                <PList>
                  {categories.map(
                    cat => cat.id === item.categoryId && cat.name
                  )}
                </PList>
                <PList>{item.comment}</PList>
                <PList>
                  <Sum transaction={item.type}>
                    {item.amount < 0 ? item.amount * -1 : item.amount}
                  </Sum>
                </PList>
                <PList>{item.balanceAfter}</PList>
              </DivTablet>
            );
          })}
        </Block>
      </LiTablet>
    </>
  );
};
export default LaptopDashboard;
