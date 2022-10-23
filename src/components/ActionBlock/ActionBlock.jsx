import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { deleteTransaction } from 'redux/transactions/transactionsOperation';
import { addModalData, openModal } from 'redux/transactions/transactionsSlice';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';

const ActionBlock = ({ item }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalAddTransactionOpen);

  const deleteActionBtn = id => {
    dispatch(deleteTransaction(id));
  };
  const editActionBtn = item => {
    dispatch(addModalData(item));
    dispatch(openModal());
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '5px',
      }}
    >
      <ButtonAddTransactions
        radius="25"
        icon="delete"
        onClickAction={() => {
          deleteActionBtn(item.id);
        }}
      />
      <ButtonAddTransactions
        icon="edit"
        radius="25"
        onClickAction={() => {
          editActionBtn(item);
        }}
      />
      {isModalOpen && <ModalAddTransactions />}
    </div>
  );
};

ActionBlock.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ActionBlock;
