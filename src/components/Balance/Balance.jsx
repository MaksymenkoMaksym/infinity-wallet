import React from 'react';
import { Container, Title, Sum } from './Balance.styled';

// import { List, ListItem, TextItem } from './Navigation.styled';

const Balance = () => {
  return (
    <Container>
      <Title>YOUR BALANCE</Title>
      <Sum>&#8372; 24000.00</Sum>
    </Container>
  );
};

export default Balance;
