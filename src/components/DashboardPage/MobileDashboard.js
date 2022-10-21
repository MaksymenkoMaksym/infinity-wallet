import { useSelector } from 'react-redux';

import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import { Li, DivItem, PName, PValue } from './DashboardPage.styled';
// import { TransactionSerializer } from './TransactionSerializer';

const titles = [
  { name: 'Date', value: 'transactionDate' },
  { name: 'Type', value: 'type' },
  { name: 'Category', value: 'categoryId' },
  { name: 'Comment', value: 'comment' },
  { name: 'Sum', value: 'amount' },
  { name: 'Balance', value: 'balanceAfter' },
];

const MobileDashboard = () => {
  const TransactionSerializer = useSelector(selectTransactions);

  return (
    <>
      {TransactionSerializer.map(item => {
        return (
          <Li key={item.id}>
            {titles.map(title => {
              return (
                <DivItem key={title.name} transaction={item.type}>
                  <PName> {title.name}</PName>
                  <PValue transaction={title.value === 'amount' && item.type}>
                    {title.value !== 'type' && item[title.value]}
                    {item[title.value] === 'INCOME' && '+'}
                    {item[title.value] === 'EXPENSE' && '-'}
                  </PValue>
                </DivItem>
              );
            })}
          </Li>
        );
      })}
    </>
  );
};
export default MobileDashboard;
