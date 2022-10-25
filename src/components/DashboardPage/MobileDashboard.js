import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import Modal from '../ModalLogout/Modal';

import {
  Li,
  DivItem,
  PName,
  PValue,
  Buttons,
  MobDiv,
} from './DashboardPage.styled';
import EmptyTransactions from '../EmptyTransactions/EmptyTransactions';
import useSortedTtransactions from 'hooks/sortedTtransactions';
// import ActionBlock from 'components/ActionBlock/ActionBlock';
import { useHookTransaction } from 'hooks';
import DeleteBtn from '../ListButtons/deleteBtn';
import EditBtn from '../ListButtons/editBtn';
import { deleteTransaction } from 'redux/transactions/transactionsOperation';

const MobileDashboard = () => {
  const [show, setShow] = useState(false);
  const transactions = useSortedTtransactions();
  const [transactionID, setTransactionID] = useState(null);
  const { categories } = useHookTransaction();
  const dispatch = useDispatch();

  const deleteActionBtn = item => {
    dispatch(deleteTransaction(item));
  };

  return (
    <MobDiv>
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
              {/* <ActionBlock item={item} /> */}
              <Buttons>
                <DeleteBtn
                  item={item}
                  setShow={() => setShow(true)}
                  setTransactionID={setTransactionID}
                />
                <EditBtn item={item} />
              </Buttons>
            </Li>
          );
        })
      ) : (
        <EmptyTransactions />
      )}
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
    </MobDiv>
  );
};
export default MobileDashboard;
