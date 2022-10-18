import styled from 'styled-components';

const Div = styled.div`
  color: ${props => props.theme.colors.green};
`;

export const App = () => {
  return (
    <div>
      <Div>infinity-wallet</Div>
    </div>
  );
};
