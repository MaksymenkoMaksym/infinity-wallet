import DatePicker from 'react-datepicker';
import { DatePickerWrapper, DateIcon } from './ModalAddDatePicker.styled';
import sprite from '../../assets/images/icons.svg';
import 'react-datepicker/dist/react-datepicker.css';

const ModalAddDatePicker = ({ values, setFieldValue }) => {
  return (
    <>
      <DatePickerWrapper>
        <DatePicker
          name="date"
          required
          selected={values.date}
          onChange={date => {
            setFieldValue('date', date);
          }}
          dateFormat="dd.MM.yyyy"
        />
        <DateIcon>
          <use href={`${sprite}#icon-date_range`}></use>
        </DateIcon>
      </DatePickerWrapper>
    </>
  );
};

export default ModalAddDatePicker;
