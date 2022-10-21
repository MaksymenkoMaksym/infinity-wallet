import { useState } from 'react';
import DatePicker from 'react-datepicker';
import select from '../../assets/images/icons.svg';
import {
  IconBtn,
  SelectBtn,
  SelectText,
  WraperPicker,
  Box,
} from './SelectBtn.styled';
const monthsString = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export default function SelectButtonMonth({ hendelSelect, month, setDate }) {
  const [isOpenMonth, setIsOpenMonth] = useState(false);

  const handleChangeMonth = e => {
    const month = e.getMonth() + 1;
    setDate(prevDate => ({ ...prevDate, month }));
    setIsOpenMonth(!isOpenMonth);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpenMonth(!isOpenMonth);
  };

  return (
    <Box>
      <SelectBtn>
        <SelectText>{monthsString[month - 1]}</SelectText>
        <IconBtn onClick={handleClick}>
          <use href={select + `#icon-select`} />
        </IconBtn>
      </SelectBtn>
      <WraperPicker>
        {isOpenMonth && (
          <DatePicker
            selected={new Date()}
            onChange={handleChangeMonth}
            inline
            dateFormat="MM/yyyy"
            showMonthYearPicker
            showFullMonthYearPicker
            // calendarContainer={CalendarContainer}
          />
        )}
      </WraperPicker>
    </Box>
  );
}
