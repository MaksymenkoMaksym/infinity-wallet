import styled from 'styled-components';

const Div = styled.div`
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xl};
`;

export const App = () => {
  return (
    <div>
      <Div>infinity-wallet</Div>
    </div>
  );
};
