import { ErrorMessage, Formik } from 'formik';
import sprite from '../../assets/images/icons.svg';
import {
  AddForm,
  Overlay,
  Modal,
  Title,
  Button,
  CancelButton,
  Input,
  Comment,
  CloseIcon,
  CloseBox,
  DateSumWrap,
  SumInput,
  CommentLabel,
} from './ModalAddTransactions.styled';
import { Tab } from 'components/MediaWraper/MediaWraper';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/transactions/transactionsSlice';
import {
  isModalAddTransactionOpen,
  selectTransactionCategories,
} from 'redux/transactions/transactionsSelectors';
import { createTransaction } from 'redux/transactions/transactionsOperation';
import { useEffect } from 'react';
import ModalAddSwitch from 'components/ModalAddSwitch/ModalAddSwitch';
import ModalAddSelect from 'components/ModalAddSelect/ModalAddSelect';
import ModalAddDatePicker from 'components/ModalAddDatePicker/ModalAddDatePicker';
import { validationSchemaAddTransaction } from 'utility/validationSchema';

const ModalAddTransactions = () => {
  const dispatch = useDispatch();
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
    console.log(transaction);
    dispatch(createTransaction(transaction));
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  const options = getOptions();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleClose = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    window.addEventListener('keydown', handleClose);
    return () => {
      window.removeEventListener('keydown', handleClose);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, dispatch]);

  return (
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        {/* <HeaderBox> {isMobileScreen && <Header />}</HeaderBox> */}
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
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchemaAddTransaction}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ values, setFieldValue }) => (
            <AddForm>
              <ModalAddSwitch values={values} setFieldValue={setFieldValue} />
              {values.type === 'EXPENSE' && (
                <ModalAddSelect
                  options={options}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              )}
              <DateSumWrap>
                <div>
                  <label>
                    <SumInput
                      type="number"
                      name="sum"
                      placeholder="0.00"
                      required
                    />
                    <ErrorMessage name="sum" />
                  </label>
                </div>
                <ModalAddDatePicker
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </DateSumWrap>
              <CommentLabel>
                <Comment>Comment</Comment>
                <Input type="text" name="comment" />
              </CommentLabel>
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
