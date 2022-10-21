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

export default function SelectButton({ year, setDate }) {
  const [isOpenYear, setIsOpenYear] = useState(false);

  const handleChangeYear = e => {
    const year = e.getFullYear();

    setDate(prevDate => ({ ...prevDate, year }));
    setIsOpenYear(!isOpenYear);
  };

  const handleClick = e => {
    e.preventDefault();
    setIsOpenYear(!isOpenYear);
  };

  return (
    <Box>
      <SelectBtn onClick={handleClick}>
        <SelectText>{year}</SelectText>
        <IconBtn>
          <use href={select + `#icon-select`} />
        </IconBtn>
      </SelectBtn>
      <WraperPicker>
        {isOpenYear && (
          <DatePicker
            selected={new Date()}
            onChange={handleChangeYear}
            showYearPicker
            inline
            dateFormat="yyyy"
          />
        )}
      </WraperPicker>
    </Box>
  );
}
