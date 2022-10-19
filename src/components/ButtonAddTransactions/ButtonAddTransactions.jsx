import { AddBtn, Icon } from './ButtonAddTransactions.styled';
import sprite from '../../assets/images/icons.svg';
const ButtonAddTransactions = () => {
  return (
    <AddBtn onClick={() => {}}>
      <Icon>
        <use href={`${sprite}#icon-plus`}></use>
      </Icon>
    </AddBtn>
  );
};

export default ButtonAddTransactions;
