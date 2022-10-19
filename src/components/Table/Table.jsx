import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from '../Table/Table.module.css';

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

  return (
    <>
      <div className={css.wraper}>
        <button className={css.table_picker} onClick={handleClick}>
          <span className={css.picker_text}>Месяц</span>
        </button>
        <button className={css.table_picker} onClick={handleClick}>
          <span className={css.picker_text}>Год</span>
          {isOpen && (
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              showYearPicker
              inline
              dateFormat="yyyy"
            />
          )}
        </button>

        <div className={css.table_head}>
          <p className={css.head_text}>Категория</p>
          <p className={css.head_text}>Сумма</p>
        </div>
        <ul className={css.table_list}>
          {diagram.map(item => {
            return (
              <li className={css.table_item}>
                <span
                  className={css.item_square}
                  style={{ background: item.color }}
                ></span>
                <p className={css.item_text}>{item.name}</p>
                <p className={css.item_number}>{item.value.toFixed(2)}</p>
              </li>
            );
          })}
        </ul>
        <div className={css.table_total}>
          <p className={css.total_text}>Расходы:</p>
          <p className={css.total_number}>{totalDiagram.toFixed(2)}</p>
        </div>
        <div className={css.table_total}>
          <p className={css.total_text}>Доходы:</p>
          <p className={css.number_income}>5000.00</p>
        </div>
      </div>
    </>
  );
};

export default Table;
