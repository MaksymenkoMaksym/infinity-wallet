import React from 'react';
import { Container, Table, Thead, TdName, TdValue } from './Currency.styled';

const Currency = () => {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </Thead>

        <tbody>
          <tr>
            <TdName>USD</TdName>
            <TdValue>38.50</TdValue>
            <TdValue>40.00</TdValue>
          </tr>
          <tr>
            <TdName>EUR</TdName>
            <TdValue>38.20</TdValue>
            <TdValue>41.00</TdValue>
          </tr>
          <tr>
            <TdName>PLZ</TdName>
            <TdValue>20.00</TdValue>
            <TdValue>21.00</TdValue>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// TransactionHistory.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };

export default Currency;

// import React, { useEffect, useState } from 'react';
// const fetchCurrency = async () => {
//   try {
//     const response = await fetch(
//       'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
//     );
//     const rates = response.json();
//     return rates;
//   } catch (error) {
//     throw error;
//   }
// };

// function Currency() {
//   const [currency, setCurrency] = useState([]);
//   const s = useStyles();

//   useEffect(() => {
//     // (1) определить в области обратного вызова эффекта
//     const fetch = async () => {
//       try {
//         const data = await fetchCurrency();
//         const sliced = data.slice(0, -1);
//         setCurrency([...sliced]);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const id = setInterval(() => {
//       fetch(); // <- (3) вызов в интервале обратного вызова
//     }, 300000);

//     fetch(); // <- (2) вызываем при монтировании

//     return () => clearInterval(id);
//   }, []);
