import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';
import DashboardPage from 'components/DashboardPage';

import { Tab } from 'components/MediaWraper/MediaWraper';
import Header from 'components/Header';

import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';
import { useSelector } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/transactions/transactionsSelectors';

// import MediaQuery from 'react-responsive';
// import { useMediaQuery } from 'react-responsive';
// import { redirect } from 'react-router-dom';

const Wrapper = styled.div`
  ${props => props.theme.breakpoints.desc} {
    display: flex;
  }
`;

const Container = styled.div`
  display: block;
  padding-bottom: 32px;

  ${props => props.theme.breakpoints.tab} {
    display: flex;
    justify-content: space-around;
    padding-top: 32px;
  }

  ${props => props.theme.breakpoints.desc} {
    display: block;
    padding: 32px 69px 20px 0;
    border-right: 1px solid #e7e5f2;
    box-shadow: -0px 0px 0px rgb(0 0 0 / 5%), 1px 0px 0px rgb(255 255 255 / 60%);
  }
`;
const DashboardBox = styled.div`
  ${props => props.theme.breakpoints.desc} {
    padding: 40px 0 0 69px;
  }
`;

const Column = styled.div``;

const Home = () => {
  const isModalOpen = useSelector(isModalAddTransactionOpen);

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Column>
            <Navigation />
            <Balance />
          </Column>

          <Tab>
            <Currency />
          </Tab>
        </Container>
        <DashboardBox>
          <DashboardPage />
        </DashboardBox>
      </Wrapper>
      <ButtonAddTransactions />
      {isModalOpen && <ModalAddTransactions />}
    </>
  );
};

export default Home;
