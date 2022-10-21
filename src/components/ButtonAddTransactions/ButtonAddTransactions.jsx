import { AddBtn, Icon } from './ButtonAddTransactions.styled';
import sprite from '../../assets/images/icons.svg';

const ButtonAddTransactions = ({ onClickAction, icon }) => {
  return (
    <AddBtn
      onClick={() => {
        onClickAction();
      }}
      icon={icon}
    >
      <Icon>
        <use href={`${sprite}#icon-${icon}`}></use>
      </Icon>
    </AddBtn>
  );
};

export default ButtonAddTransactions;
