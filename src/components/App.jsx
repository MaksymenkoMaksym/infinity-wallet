import Chart from './Chart'
import styled from 'styled-components';
//case1 theme
// const Div = styled.div`
//   color: ${props => props.theme.colors.green};
//   font-family: ${props => props.theme.fonts.main};
//   font-size: ${props => props.theme.fontSizes.xl};
//   margin: ${props => props.theme.space[1]};
//   padding: ${props => props.padding};
// `;

//case2 attribute
const Div = styled.div`
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xl};
  padding: ${props => props.padding};
`;

//case 3 same tag so can do this
const Div2 = styled(Div)`
  border: ${props => props.theme.borders.normal};
`;

export const App = () => {
  return (
    <div>
      <Div padding="2em">infinity-wallet</Div>
      <Div2 padding="2em">infinity-wallet</Div2>
      <Chart />
    </div>
  );
};
