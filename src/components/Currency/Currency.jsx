import React, { useEffect, useState } from 'react';
import { Container, Table, Thead, TdName, TdValue } from './Currency.styled';
import fetchCurrency from '../../assets/CurrencyApi/fetchCurrency';
import Loader from 'components/Loader';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  // const isServerResponse = currency.length === 0;
  const isServerResponse = true;
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchCurrency();
        setCurrency([...data]);
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(() => {
      fetch();
    }, 300000);
    fetch();
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      {isServerResponse ? (
        <Loader box="true" />
      ) : (
        <Table>
          <Thead>
            <tr>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </Thead>

          <tbody>
            {currency
              ?.filter(element => {
                return element.ccy !== 'RUR';
              })
              .map(element => (
                <tr key={element.ccy}>
                  <TdName>{element.ccy}</TdName>
                  <TdValue>{Math.floor(element.buy * 100) / 100}</TdValue>
                  <TdValue>{Math.floor(element.sale * 100) / 100}</TdValue>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Currency;
