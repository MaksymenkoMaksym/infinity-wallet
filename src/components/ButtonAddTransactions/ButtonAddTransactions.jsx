import { AddBtn, Icon } from './ButtonAddTransactions.styled';
import sprite from '../../assets/images/icons.svg';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/transactions/transactionsSlice';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <AddBtn
      onClick={() => {
        dispatch(openModal());
      }}
    >
      <Icon>
        <use href={`${sprite}#icon-plus`}></use>
      </Icon>
    </AddBtn>
  );
};

export default ButtonAddTransactions;
