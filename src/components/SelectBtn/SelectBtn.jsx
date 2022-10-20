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

export default function SelectButton() {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenYear, setIsOpenYear] = useState(false);

  const handleChangeYear = e => {
    console.log(e);
    setIsOpenYear(!isOpenYear);
    setStartDate(e);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpenYear(!isOpenYear);
  };

  function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp + 1);
    const year = a.getFullYear();
    return year;
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
        {isOpenYear && (
          <DatePicker
            selected={startDate}
            onChange={handleChangeYear}
            showYearPicker
            inline
            dateFormat="yyyy"
            // calendarContainer={CalendarContainer}
          />
        )}
      </WraperPicker>
    </Box>
  );
}
