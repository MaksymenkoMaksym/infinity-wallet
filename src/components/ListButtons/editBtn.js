import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addModalData, openModal } from 'redux/transactions/transactionsSlice';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';

import sprite from '../../assets/images/icons.svg';
import { EdBtn, Icon } from './ListButton.styled';

const EditBtn = ({ item }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModalAddTransactionOpen);

  const editActionBtn = item => {
    dispatch(addModalData(item));
    dispatch(openModal());
  };

  return (
    <div>
      <EdBtn
        onClick={() => {
          editActionBtn(item);
        }}
      >
        <Icon>
          <use href={`${sprite}#icon-edit`}></use>
        </Icon>
      </EdBtn>
    </div>
  );
};

EditBtn.propTypes = {
  item: PropTypes.object.isRequired,
};

export default EditBtn;
