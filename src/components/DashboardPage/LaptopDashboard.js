import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import {
  Sum,
  UlTitle,
  DivTablet,
  PList,
  LiTablet,
  PName,
} from './DashboardPage.styled';
// import { TransactionSerializer } from './TransactionSerializer';
import {
  selectTransactions,
  selectTransactionCategories,
} from '../../redux/transactions/transactionsSelectors';

const LaptopDashboard = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);
  //   const dispatch = useDispatch();

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
        {transactions.map(item => {
          return (
            <DivTablet key={item.id}>
              <PList>
                {/* <DatePicker
                  //   selected={new Date()}
                  dateFormat="dd/MM/yyyy"
                  value={item.transactionDate}
                /> */}
                {item.transactionDate}
              </PList>
              <PList>{item.type === 'INCOME' ? '+' : '-'}</PList>

              <PList>
                {categories.map(cat => cat.id === item.categoryId && cat.name)}
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
      </LiTablet>
    </>
  );
};
export default LaptopDashboard;
// {format(startDate, "dd-MM-yyyy")}
