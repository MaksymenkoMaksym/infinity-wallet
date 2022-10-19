import { Route, Routes } from 'react-router-dom';

// import styled from 'styled-components';
import Header from './Header';
import Chart from './Chart';
import Table from './Table';
import TestCom from './TestCom/TestCom ';
//case1 theme
// const Div = styled.div`
//   color: ${props => props.theme.colors.green};
//   font-family: ${props => props.theme.fonts.main};
//   font-size: ${props => props.theme.fontSizes.xl};
//   margin: ${props => props.theme.space[1]};
//   padding: ${props => props.padding};
// `;

//case2 attribute
// const Div = styled.div`
//   color: ${props => props.theme.colors.green};
//   font-family: ${props => props.theme.fonts.main};
//   font-size: ${props => props.theme.fontSizes.xl};
//   padding: ${props => props.padding};
// `;

//case 3 same tag so can do this
// const Div2 = styled(Div)`
//   border: ${props => props.theme.borders.normal};
// `;

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/test" element={<TestCom />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
      <Chart />
      <Table />
    </div>
  );
};
