import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import DashboardPage from 'components/DashboardPage';

import { Tab, Desc } from 'components/MediaWraper/MediaWraper';

// import MediaQuery from 'react-responsive';
// import { useMediaQuery } from 'react-responsive';
// import { redirect } from 'react-router-dom';

const Container = styled.div`
  display: block;
  padding-bottom: 32px;
  ${props => props.theme.breakpoints.tab} {
    display: flex;
    padding-top: 32px;
    padding-bottom: 20px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding-top: 32px;
    padding-bottom: 20px;
  }
`;
const Box = styled.div``;

const Home = () => {
  return (
    <>
      <aside>
        <Container>
          <Box>
            <Navigation />
            <Balance />
          </Box>

          <Tab>
            <Currency />
          </Tab>
        </Container>
      </aside>
      <article>
        <DashboardPage />
      </article>
    </>
  );
};

export default Home;
