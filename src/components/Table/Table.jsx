import SelectButton from 'components/SelectBtn/SelectBtn';
import SelectButtonMonth from 'components/SelectBtn/SelectBtnMonth';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Chart from 'components/Chart';

import {
  ColorSpan,
  Item,
  ListUl,
  ParagraphHead,
  ParagraphNumber,
  ParagraphText,
  ParagraphTotal,
  TableHead,
  TotalDiv,
  WraperDiv,
  WraperSelect,
} from './Table.styled';

const Table = () => {
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

  return (
    <>
      <Chart dataTransactions={diagram} />
      <WraperDiv>
        <WraperSelect>
          <SelectButtonMonth />
          <SelectButton />
        </WraperSelect>
        <TableHead>
          <ParagraphHead>Категория</ParagraphHead>
          <ParagraphHead>Сумма</ParagraphHead>
        </TableHead>
        <ListUl>
          {diagram.map((item, index) => {
            return (
              <Item key={item.name}>
                <ColorSpan index={index}></ColorSpan>
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
