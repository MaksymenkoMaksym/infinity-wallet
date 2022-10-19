import { Formik, Field } from 'formik';
import { useState } from 'react';
import sprite from '../../assets/images/icons.svg';
import {
  AddForm,
  Overlay,
  Modal,
  Title,
  Button,
  CancelButton,
  SwitchIcon,
  IconBox,
  Input,
  SwitchLabel,
  SwitchText,
  Comment,
  CloseIcon,
  CloseBox,
} from './ModalAddTransactions.styled';
import Switch from 'react-switch';

const ModalAddTransactions = () => {
  const [isIncome, setIsIncome] = useState(true);
  const initialValues = {
    category: '',
    type: 'Income',
    sum: '',
    comment: '',
    date: '',
  };

  const handleFormSubmit = values => {
    console.log(values);
  };
  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      // toggleModal();
      // setIsOpen(false);
      console.log('close on backdrop');
    }
  };
  const textColor = () => {
    return isIncome
      ? { inc: '#24CCA7', exp: '#E0E0E0' }
      : { inc: '#E0E0E0', exp: '#FF6596' };
  };
  return (
    <Overlay onClick={handleCloseModal}>
      <Modal>
        <CloseBox>
          <CloseIcon>
            <use href={`${sprite}#icon-close`}></use>
          </CloseIcon>
        </CloseBox>
        <Title>Add transaction</Title>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ isSubmitting, values, setFieldValue }) => (
            <AddForm>
              <SwitchLabel htmlFor="small-radius-switch">
                <SwitchText inputColor={textColor().inc}>Income</SwitchText>
                <Switch
                  name="type"
                  value="Income"
                  checked={values.type === 'Expense'}
                  onChange={(checked, event) => {
                    setFieldValue('type', checked ? 'Expense' : 'Income');
                    setIsIncome(prev => !prev);
                    setFieldValue('category', checked ? values.category : '');
                    // console.log(values.type);
                  }}
                  handleDiameter={40}
                  offColor="#FF6596"
                  onColor="#24CCA7"
                  offHandleColor="#24CCA7"
                  onHandleColor="#FF6596"
                  height={40}
                  width={80}
                  // borderRadius={6}
                  border=""
                  boxShadow="0px 0px 1px 2px #BDBDBD"
                  activeBoxShadow="0px 0px 1px 2px #BDBDBD"
                  uncheckedIcon={<div></div>}
                  uncheckedHandleIcon={
                    <IconBox>
                      <SwitchIcon>
                        <use href={`${sprite}#icon-plus`}></use>
                      </SwitchIcon>
                    </IconBox>
                  }
                  checkedIcon={<div></div>}
                  checkedHandleIcon={
                    <IconBox>
                      <SwitchIcon>
                        <use href={`${sprite}#icon-minus`}></use>
                      </SwitchIcon>
                    </IconBox>
                  }
                  className="react-switch"
                  id="small-radius-switch"
                />
                <SwitchText inputColor={textColor().exp}>Expense</SwitchText>
              </SwitchLabel>
              {!isIncome && (
                <Input as="select" name="category" required>
                  <option value="">Select a category</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
                </Input>
              )}
              <label>
                <Input type="text" name="sum" placeholder="0.00" required />
              </label>
              <label>
                <Input type="date" name="date" required />
              </label>
              <label>
                <Comment>Comment</Comment>
                <Input type="text" name="comment" />
              </label>
              <Button type="submit">ADD</Button>
              <CancelButton type="button" onClick={() => {}}>
                CANCEL
              </CancelButton>
            </AddForm>
          )}
        </Formik>
      </Modal>
    </Overlay>
  );
};

export default ModalAddTransactions;
