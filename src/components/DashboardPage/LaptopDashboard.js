import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import Modal from '../ModalLogout/Modal';
import { deleteTransaction } from 'redux/transactions/transactionsOperation';
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
// import ActionBlock from 'components/ActionBlock/ActionBlock';
import useSortedTtransactions from 'hooks/sortedTtransactions';
import { useHookTransaction } from 'hooks';
import DeleteBtn from '../ListButtons/deleteBtn';
import EditBtn from '../ListButtons/editBtn';

const LaptopDashboard = () => {
  const [show, setShow] = useState(false);
  const transactions = useSortedTtransactions();
  const [transactionID, setTransactionID] = useState(null);
  const { categories } = useHookTransaction();
  const dispatch = useDispatch();

  const deleteActionBtn = item => {
    dispatch(deleteTransaction(item));
  };
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
                <DivTablet key={item.id}>
                  <EditBtn item={item} />
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

                  <DeleteBtn
                    item={item}
                    setShow={() => setShow(true)}
                    setTransactionID={setTransactionID}
                  />
                </DivTablet>
              );
            })}
          </Block>
          <Modal
            handlerFunc={() => {
              deleteActionBtn(transactionID);
            }}
            onClose={() => {
              setShow(false);
              setTransactionID(null);
            }}
            show={show}
            title="Delete transaction?"
          />
        </LiTablet>
      ) : (
        <EmptyTransactions />
      )}
    </>
  );
};

export default LaptopDashboard;
