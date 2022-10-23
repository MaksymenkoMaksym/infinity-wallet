import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTransaction } from 'redux/transactions/transactionsOperation';
import sprite from '../../assets/images/icons.svg';
import { DelBtn, Icon } from './ListButton.styled';

const DeleteBtn = ({ item }) => {
  const dispatch = useDispatch();

  const deleteActionBtn = item => {
    dispatch(deleteTransaction(item));
  };
  return (
    <div>
      <DelBtn
        onClick={() => {
          deleteActionBtn(item);
        }}
      >
        <Icon>
          <use href={`${sprite}#icon-delete`}></use>
        </Icon>
      </DelBtn>
    </div>
  );
};

DeleteBtn.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DeleteBtn;
