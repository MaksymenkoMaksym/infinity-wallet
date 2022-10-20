import Chart from 'components/Chart';
import SelectButton from 'components/SelectBtn/SelectBtn';
import SelectButtonMonth from 'components/SelectBtn/SelectBtnMonth';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

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
  const {
    categoriesSummary,
    expenseSummary,
    incomeSummary,
    month,
    periodTotal,
    year,
  } = useTransaction();

  const hendelSelectBtn = e => {};

  return (
    <>
      <Chart dataTransactions={diagram} />
      <WraperDiv>
        <WraperSelect>
          <SelectButtonMonth hendelSelect={hendelSelectBtn} />
          <SelectButton hendelSelect={hendelSelectBtn} />
        </WraperSelect>
        <TableHead>
          <ParagraphHead>Категория</ParagraphHead>
          <ParagraphHead>Сумма</ParagraphHead>
        </TableHead>
        <ListUl>
          {categoriesSummary.map((item, index) => {
            if (item.name !== 'Income') {
              return (
                <Item key={item.name}>
                  <ColorSpan index={index}></ColorSpan>
                  <ParagraphText>{item.name}</ParagraphText>
                  <ParagraphNumber>{item.total.toFixed(2)}</ParagraphNumber>
                </Item>
              );
            }
          })}
        </ListUl>
        <TotalDiv>
          <ParagraphText style={{ fontWeight: 700, margin: 0 }}>
            Расходы:
          </ParagraphText>
          <ParagraphTotal>{periodTotal.toFixed(2).slice(1)}</ParagraphTotal>
        </TotalDiv>
        <TotalDiv>
          <ParagraphText style={{ fontWeight: 700, margin: 0 }}>
            Доходы:
          </ParagraphText>
          <ParagraphTotal income>{incomeSummary.toFixed(2)}</ParagraphTotal>
        </TotalDiv>
      </WraperDiv>
    </>
  );
};

export default Table;
