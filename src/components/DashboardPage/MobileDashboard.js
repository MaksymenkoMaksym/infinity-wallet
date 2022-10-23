import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Li, DivItem, PName, PValue } from './DashboardPage.styled';
import EmptyTransactions from '../EmptyTransactions/EmptyTransactions';
import useSortedTtransactions from 'utility/sortedTtransactions';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { deleteTransaction } from 'redux/transactions/transactionsOperation';
import { addModalData } from 'redux/transactions/transactionsSlice';
import { useHookTransaction } from 'hooks';

const MobileDashboard = () => {
  const transactions = useSortedTtransactions();
  const { categories } = useHookTransaction();
  //edit btn & delete btn func
  const dispatch = useDispatch();

  const deleteActionBtn = id => {
    dispatch(deleteTransaction(id));
  };
  const editActionBtn = item => {
    dispatch(addModalData(item));
  };

  return (
    <>
      {transactions ? (
        transactions.map(item => {
          return (
            <Li key={item.id}>
              <DivItem transaction={item.type}>
                <PName> Date</PName>
                <PValue>
                  {format(new Date(item.transactionDate), 'dd.MM.yy')}
                </PValue>
              </DivItem>

              <DivItem transaction={item.type}>
                <PName> Type</PName>
                <PValue>{item.type === 'INCOME' ? '+' : '-'}</PValue>
              </DivItem>

              <DivItem transaction={item.type}>
                <PName> Category</PName>
                <PValue>
                  {categories.map(
                    cat => cat.id === item.categoryId && cat.name
                  )}
                </PValue>
              </DivItem>

              <DivItem transaction={item.type}>
                <PName> Comment</PName>
                <PValue> {item.comment}</PValue>
              </DivItem>

              <DivItem transaction={item.type}>
                <PName> Sum</PName>
                <PValue transaction={item.type}>
                  {item.amount < 0
                    ? (item.amount * -1).toFixed(2)
                    : item.amount.toFixed(2)}
                </PValue>
              </DivItem>

              <DivItem transaction={item.type}>
                <PName> Balance</PName>
                <PValue>{item.balanceAfter.toFixed(2)}</PValue>
              </DivItem>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ButtonAddTransactions
                  icon="delete"
                  onClickAction={() => {
                    deleteActionBtn(item.id);
                  }}
                />
                <ButtonAddTransactions
                  icon="edit"
                  onClickAction={() => {
                    editActionBtn(item);
                  }}
                />
              </div>
            </Li>
          );
        })
      ) : (
        <EmptyTransactions />
      )}
    </>
  );
};
export default MobileDashboard;
