import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addModalData, openModal } from 'redux/transactions/transactionsSlice';

import sprite from '../../assets/images/icons.svg';
import { EdBtn, Icon } from './ListButton.styled';

const EditBtn = ({ item }) => {
  const dispatch = useDispatch();

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
