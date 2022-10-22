import DatePicker from 'react-datepicker';
import { DataPickerWrapper, DateIcon } from './ModalAddDatePicker.styled';
import sprite from '../../assets/images/icons.svg';

const ModalAddDatePicker = ({ values, setFieldValue }) => {
  return (
    <DataPickerWrapper>
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
    </DataPickerWrapper>
  );
};

export default ModalAddDatePicker;
