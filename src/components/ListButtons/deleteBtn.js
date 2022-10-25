import PropTypes from 'prop-types';
import sprite from '../../assets/images/icons.svg';
import { DelBtn, Icon } from './ListButton.styled';

const DeleteBtn = ({ item, setShow, setTransactionID }) => {
  return (
    <>
      <div>
        <DelBtn
          onClick={() => {
            setTransactionID(item);
            setShow();
          }}
        >
          <Icon>
            <use href={`${sprite}#icon-delete`}></use>
          </Icon>
        </DelBtn>
      </div>
    </>
  );
};

DeleteBtn.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DeleteBtn;
