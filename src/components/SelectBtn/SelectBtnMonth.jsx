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
export default function SelectButtonMonth({ hendelSelect }) {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenMonth, setIsOpenMonth] = useState(false);

  hendelSelect(timeConverter(startDate));
  const handleChangeMonth = e => {
    console.log(e);
    setIsOpenMonth(!isOpenMonth);
    setStartDate(e);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpenMonth(!isOpenMonth);
  };

  function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp + 1);
    const months = [
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

    const month = months[a.getMonth()];
    return month;
  }

  return (
    <Box>
      <SelectBtn>
        <SelectText>{timeConverter(startDate)}</SelectText>
        <IconBtn onClick={handleClick}>
          <use href={select + `#icon-select`} />
        </IconBtn>
      </SelectBtn>
      <WraperPicker>
        {isOpenMonth && (
          <DatePicker
            selected={startDate}
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
