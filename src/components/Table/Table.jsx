import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import select from '../../assets/images/icons.svg';

import {
  ColorSpan,
  IconBtn,
  Item,
  ListUl,
  ParagraphHead,
  ParagraphNumber,
  ParagraphText,
  ParagraphTotal,
  TableHead,
  TotalDiv,
  WraperDiv,
  SelectBtn,
  SelectText,
} from './Table.styled';

const Table = () => {
  //   const [startYers, setStartYers] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [diagram] = useState([
    {
      name: 'Основные расходы',
      color: '#FED057',
      value: 1450,
    },
    {
      name: 'Продукты',
      color: '#FFD8D0',
      value: 3500,
    },
    {
      name: 'Машина',
      color: '#FD9498',
      value: 1200,
    },
    {
      name: 'Забота о себе',
      color: '#C5BAFF',
      value: 900,
    },
    {
      name: 'Забота о детях',
      color: '#6E78E8',
      value: 750,
    },
    {
      name: 'Товары для дома',
      color: '#4A56E2',
      value: 200,
    },
    {
      name: 'Образование',
      color: '#81E1FF',
      value: 500,
    },
    {
      name: 'Досуг',
      color: '#24CCA7',
      value: 2000,
    },
    {
      name: 'Другие расходы',
      color: '#00AD84',
      value: 1500,
    },
  ]);

  let totalDiagram = 0;
  for (let i = 0; i < diagram.length; i += 1) {
    totalDiagram += diagram[i].value;
  }

  const handleChange = e => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    // const year = a.getFullYear();
    const month = months[a.getMonth()];

    return month;
  }

  return (
    <>
      <WraperDiv>
        <SelectBtn>
          <SelectText>{timeConverter(startDate)}</SelectText>
          {isOpen && (
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              // showYearPicker
              inline
              dateFormat="MM/yyyy"
              showMonthYearPicker
            />
          )}
          <IconBtn onClick={handleClick}>
            <use href={select + `#icon-select`} />
          </IconBtn>
        </SelectBtn>
        <SelectBtn>
          <SelectText>Год</SelectText>

          <IconBtn onClick={handleClick}>
            <use href={select + `#icon-select`} />
          </IconBtn>
        </SelectBtn>

        <TableHead>
          <ParagraphHead>Категория</ParagraphHead>
          <ParagraphHead>Сумма</ParagraphHead>
        </TableHead>
        <ListUl>
          {diagram.map(item => {
            return (
              <Item>
                <ColorSpan style={{ background: item.color }}></ColorSpan>
                <ParagraphText>{item.name}</ParagraphText>
                <ParagraphNumber>{item.value.toFixed(2)}</ParagraphNumber>
              </Item>
            );
          })}
        </ListUl>
        <TotalDiv>
          <ParagraphText style={{ fontWeight: 700, margin: 0 }}>
            Расходы:
          </ParagraphText>
          <ParagraphTotal>{totalDiagram.toFixed(2)}</ParagraphTotal>
        </TotalDiv>
        <TotalDiv>
          <ParagraphText style={{ fontWeight: 700, margin: 0 }}>
            Доходы:
          </ParagraphText>
          <ParagraphTotal income>5000.00</ParagraphTotal>
        </TotalDiv>
      </WraperDiv>
    </>
  );
};

export default Table;
