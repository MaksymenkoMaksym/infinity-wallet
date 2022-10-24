import { AddBtn, Icon } from './ButtonAddTransactions.styled';
import sprite from '../../assets/images/icons.svg';

const ButtonAddTransactions = ({ onClickAction, icon, radius }) => {
  return (
    <AddBtn
      onClick={() => {
        onClickAction();
      }}
      icon={icon}
      radius={radius}
    >
      <Icon>
        <use href={`${sprite}#icon-${icon}`}></use>
      </Icon>
    </AddBtn>
  );
};

export default ButtonAddTransactions;
