import { useFormik } from 'formik';
import sprite from '../../assets/images/icons.svg';
import {
  AddForm,
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
  ErrorMsg,
  SumLabel,
  SelectBox,
} from './ModalAddTransactions.styled';
import { Tab } from 'components/MediaWraper/MediaWraper';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/transactions/transactionsSlice';
import {
  selectModalData,
  selectTransactionCategories,
} from 'redux/transactions/transactionsSelectors';
import {
  createTransaction,
  updateTransaction,
} from 'redux/transactions/transactionsOperation';
import ModalAddSwitch from 'components/ModalAddSwitch/ModalAddSwitch';
import ModalAddSelect from 'components/ModalAddSelect/ModalAddSelect';
import ModalAddDatePicker from 'components/ModalAddDatePicker/ModalAddDatePicker';
import { validationSchemaAddTransaction } from 'utility/validationSchema';
import ModalOverlay from 'components/ModalOverlay/ModalOverlay';

const ModalAddTransactions = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionCategories);
  const modalData = useSelector(selectModalData);
  const getCategoryName = id => {
    return {
      value: categories.find(elem => elem.id === id).name,
      label: categories.find(elem => elem.id === id).name,
    };
  };

  const initialValues = modalData.id
    ? {
        type: modalData.type,
        category: getCategoryName(modalData.categoryId),
        sum: +modalData.amount > 0 ? +modalData.amount : +modalData.amount * -1,
        comment: modalData.comment,
        date: new Date(modalData.transactionDate),
      }
    : {
        category: '',
        type: 'EXPENSE',
        sum: '',
        comment: '',
        date: new Date(),
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
    modalData.id
      ? dispatch(updateTransaction({ id: modalData.id, ...transaction }))
      : dispatch(createTransaction(transaction));
    formik.values = { ...initialValues };
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaAddTransaction,
    onSubmit: handleFormSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

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

  const options = getOptions();

  return (
    <ModalOverlay>
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
        <Title>{modalData.id ? 'Update transaction' : 'Add transaction'}</Title>
        <AddForm onSubmit={formik.handleSubmit}>
          <ModalAddSwitch
            values={formik.values}
            setFieldValue={formik.setFieldValue}
          />

          {formik.values.type === 'EXPENSE' && (
            <SelectBox>
              <ModalAddSelect
                options={options}
                values={formik.values}
                setFieldValue={formik.setFieldValue}
              />
              {formik.touched.category && formik.errors.category ? (
                <ErrorMsg>{formik.errors.category}</ErrorMsg>
              ) : null}
            </SelectBox>
          )}
          <DateSumWrap>
            <div>
              <SumLabel>
                <SumInput
                  type="number"
                  name="sum"
                  placeholder="0.00"
                  {...formik.getFieldProps('sum')}
                />
                {formik.touched.sum && formik.errors.sum ? (
                  <ErrorMsg>{formik.errors.sum}</ErrorMsg>
                ) : null}
              </SumLabel>
            </div>
            <div>
              <ModalAddDatePicker
                values={formik.values}
                setFieldValue={formik.setFieldValue}
              />
              {formik.touched.date && formik.errors.date ? (
                <p>{formik.errors.date}</p>
              ) : null}
            </div>
          </DateSumWrap>
          <CommentLabel>
            <Comment>Comment</Comment>
            <Input
              type="text"
              name="comment"
              {...formik.getFieldProps('comment')}
            />
            {formik.touched.comment && formik.errors.comment ? (
              <ErrorMsg>{formik.errors.comment}</ErrorMsg>
            ) : null}
          </CommentLabel>
          <Button type="submit">{modalData.id ? 'UPDATE' : 'ADD'}</Button>
          <CancelButton
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            CANCEL
          </CancelButton>
        </AddForm>
      </Modal>
    </ModalOverlay>
  );
};

export default ModalAddTransactions;
