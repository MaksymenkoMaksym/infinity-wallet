import { Formik } from 'formik';
import { useState } from 'react';
import Select from 'react-select';
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
  // StyledSelect,
} from './ModalAddTransactions.styled';
import Switch from 'react-switch';
import { Tab } from 'components/MediaWraper/MediaWraper';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/transactions/transactionsSlice';
import {
  isModalAddTransactionOpen,
  selectTransactionCategories,
} from 'redux/transactions/transactionsSelectors';
import { createTransaction } from 'redux/transactions/transactionsOperation';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';

const ModalAddTransactions = () => {
  const dispatch = useDispatch();
  const [isIncome, setIsIncome] = useState(false);
  // const [startDate, setStartDate] = useState(new Date());
  const categories = useSelector(selectTransactionCategories);
  const isModalOpen = useSelector(isModalAddTransactionOpen);
  const initialValues = {
    category: '',
    type: 'EXPENSE',
    sum: '',
    comment: '',
    date: new Date(),
  };

  const getOptions = () => {
    return categories
      .filter(category => category.type === 'EXPENSE')
      .map(category => {
        return { value: category.name, label: category.name };
      });
  };

  const getCategoryId = values => {
    if (values.type === 'INCOME') {
      return categories.find(elem => elem.type === 'INCOME').id;
    }
    return categories.find(elem => elem.name === values.category.value).id;
  };

  const handleFormSubmit = values => {
    const categoryId = getCategoryId(values);
    const formatDate =
      values.date.toLocaleDateString('en-us', { year: 'numeric' }) +
      '-' +
      values.date.toLocaleDateString('en-us', { month: '2-digit' }) +
      '-' +
      values.date.toLocaleDateString('en-us', { day: '2-digit' });
    const transaction = {
      transactionDate: formatDate,
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
      dispatch(closeModal());
    }
  };

  const switchTextColor = () => {
    return isIncome
      ? { inc: '#24CCA7', exp: '#E0E0E0' }
      : { inc: '#E0E0E0', exp: '#FF6596' };
  };
  const options = getOptions();

  const customStyles = {
    //випадаючий список
    menu: provided => ({
      //значення по дефолту
      ...provided,
      overflow: 'hidden',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      borderRadius: 20,
      outlite: 0,
    }),
    // один зі списку
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',

      color: state.isFocused ? '#FF6596' : '#000000',
      padding: 20,
      backgroundColor: state.isFocused ? 'white' : null,
      cursor: 'pointer',
    }),
    //пошуковий рядок
    control: (provided, state) => ({
      ...provided,
      width: 280,
      border: 0,
      borderColor: state.isFocused ? 'transparent' : null,
      borderBottom: '1px solid   #E0E0E0',
      borderRadius: 0,
      backgroundColor: 'transparent',
    }),
    placeholder: provided => ({
      ...provided,
      color: '#BDBDBD',
    }),
  };

  useEffect(() => {
    const handleClose = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [isModalOpen, dispatch]);

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
                <SwitchText inputColor={switchTextColor().inc}>
                  Income
                </SwitchText>
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
                  handleDiameter={44}
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
                <SwitchText inputColor={switchTextColor().exp}>
                  Expense
                </SwitchText>
              </SwitchLabel>
              {!isIncome && (
                <Select
                  value={values.category}
                  styles={customStyles}
                  onChange={data => {
                    setFieldValue('category', data);
                    console.log(values);
                  }}
                  placeholder="Select category"
                  options={options}
                  required
                />
              )}
              <label>
                <Input type="text" name="sum" placeholder="0.00" required />
              </label>

              <DatePicker
                selected={values.date}
                onChange={date => {
                  // console.log(date.toLocaleDateString());
                  setFieldValue('date', date);
                  // console.log(values.date);
                }}
                dateFormat="dd.MM.yyyy"
              />

              {/* <label>
                <Input type="date" name="date" required />
              </label> */}
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
