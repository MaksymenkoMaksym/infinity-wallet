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
import EmptyTransactions from '../EmptyTransactions';
// import { selectTransactionCategories } from '../../redux/transactions/transactionsSelectors';
import ActionBlock from 'components/ActionBlock/ActionBlock';
import useSortedTtransactions from 'hooks/sortedTtransactions';
import { useHookTransaction } from 'hooks';

const LaptopDashboard = () => {
  const transactions = useSortedTtransactions();
  const { categories } = useHookTransaction();

  return (
    <>
      {transactions ? (
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
                <>
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
                        {item.amount < 0
                          ? (item.amount * -1).toFixed(2)
                          : item.amount.toFixed(2)}
                      </Sum>
                    </PList>
                    <PList>{item.balanceAfter.toFixed(2)}</PList>
                  </DivTablet>
                  <ActionBlock item={item} />
                </>
              );
            })}
          </Block>
        </LiTablet>
      ) : (
        <EmptyTransactions />
      )}
    </>
  );
};

export default LaptopDashboard;
