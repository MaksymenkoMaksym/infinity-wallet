import React, { useEffect, useState } from 'react';
import {
  Container,
  Thead,
  TdItem,
  TdBox,
  ThItem,
  TdList,
} from './Currency.styled';
import fetchCurrency from '../../utility/CurrencyApi/fetchCurrency';
import Loader from 'components/Loader';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const isServerResponse = currency.length === 0;
  // const isServerResponse = false;
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
    <>
      {isServerResponse ? (
        <Loader box="true" />
      ) : (
        <Container>
          <Thead>
            <ThItem>Currency</ThItem>
            <ThItem>Purchase</ThItem>
            <ThItem>Sale</ThItem>
          </Thead>

          <TdBox>
            {currency
              ?.filter(element => {
                return element.ccy !== 'RUR';
              })
              .map(element => (
                <TdList key={element.ccy}>
                  <TdItem>{element.ccy}</TdItem>
                  <TdItem>{Math.floor(element.buy * 100) / 100}</TdItem>
                  <TdItem>{Math.floor(element.sale * 100) / 100}</TdItem>
                </TdList>
              ))}
          </TdBox>
        </Container>
      )}
    </>
  );
};

export default Currency;
