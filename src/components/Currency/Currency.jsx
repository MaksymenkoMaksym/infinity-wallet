import React, { useEffect } from 'react';
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
import { useLocalStorage } from 'hooks/useLocalStorage';

const Currency = () => {
  const [currency] = useLocalStorage();
  const isServerResponse = currency.length === 0;

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
            {currency[0]
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
