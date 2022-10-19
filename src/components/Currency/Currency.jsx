import React from 'react';
import {
  Container,
  Table,
  Tbody,
  Thead,
  TdName,
  TdValue,
} from './Currency.styled';

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

        <Tbody>
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
        </Tbody>
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
