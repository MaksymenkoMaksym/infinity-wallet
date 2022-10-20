import { Formik } from 'formik';
import { useState } from 'react';
// import Select from 'react-select';
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
  StyledSelect,
} from './ModalAddTransactions.styled';
import Switch from 'react-switch';
import { Tab } from 'components/MediaWraper/MediaWraper';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/transactions/transactionsSlice';
import { selectTransactionCategories } from 'redux/transactions/transactionsSelectors';
import { createTransaction } from 'redux/transactions/transactionsOperation';

const ModalAddTransactions = () => {
  const dispatch = useDispatch();
  const [isIncome, setIsIncome] = useState(false);
  const categories = useSelector(selectTransactionCategories);

  const initialValues = {
    category: '',
    type: 'EXPENSE',
    sum: '',
    comment: '',
    date: '',
  };
  const getOptions = () => {
    return categories
      .filter(category => category.type === 'EXPENSE')
      .map(category => {
        return { value: category.name, label: category.name };
      });
  };
  const getCategoryId = values => {
    // console.log(category);
    if (values.type === 'INCOME') {
      return categories.find(elem => elem.type === 'INCOME').id;
    }
    return categories.find(elem => elem.name === values.category.value).id;
  };
  const handleFormSubmit = values => {
    const categoryId = getCategoryId(values);
    // console.log(values);
    // console.log(getCategoryId(values.category));
    // console.log(categoryId);
    // console.log(getOptions());
    const transaction = {
      transactionDate: values.date,
      type: values.type,
      categoryId,
      comment: values.comment,
      amount: values.type === 'INCOME' ? +values.sum : +values.sum * -1,
    };
    // console.log(transaction);
    dispatch(createTransaction(transaction));
  };
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      // toggleModal();
      // setIsOpen(false);
      dispatch(closeModal());
    }
  };

  const options = getOptions();
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];

  const textColor = () => {
    return isIncome
      ? { inc: '#24CCA7', exp: '#E0E0E0' }
      : { inc: '#E0E0E0', exp: '#FF6596' };
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <Tab>
          <CloseBox
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <CloseIcon>
              <use href={`${sprite}#icon-close`}></use>
            </CloseIcon>
          </CloseBox>
        </Tab>
        <Title>Add transaction</Title>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({ values, setFieldValue }) => (
            <AddForm>
              <SwitchLabel htmlFor="small-radius-switch">
                <SwitchText inputColor={textColor().inc}>Income</SwitchText>
                <Switch
                  name="type"
                  value={values.type}
                  checked={values.type === 'EXPENSE'}
                  onChange={(checked, event) => {
                    setFieldValue('type', checked ? 'EXPENSE' : 'INCOME');
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
                <StyledSelect
                  value={values.category}
                  classNamePrefix="Select"
                  required
                  onChange={data => {
                    // console.log(data.value);
                    setFieldValue('category', data);
                    console.log(values);
                  }}
                  placeholder="Select category"
                  options={options}
                />
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
              <CancelButton
                type="button"
                onClick={() => {
                  dispatch(closeModal());
                }}
              >
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
