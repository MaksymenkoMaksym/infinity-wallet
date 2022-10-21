import Chart from 'components/Chart';
import SelectButton from 'components/SelectBtn/SelectBtn';
import SelectButtonMonth from 'components/SelectBtn/SelectBtnMonth';
import 'react-datepicker/dist/react-datepicker.css';
import useTransaction from 'utility/diagram';

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

const Table = ({ setDate }) => {
  const { categoriesSummary, expenseSummary, incomeSummary, month, year } =
    useTransaction();

  return (
    <>
      <Chart dataTransactions={categoriesSummary} />
      <WraperDiv>
        <WraperSelect>
          <SelectButtonMonth month={month} setDate={setDate} />
          <SelectButton year={year} setDate={setDate} />
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
          <ParagraphTotal>{expenseSummary.toFixed(2)}</ParagraphTotal>
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
