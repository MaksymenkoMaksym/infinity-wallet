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

import PinkSpot from '../assets/images/Ellipse-2.png';

import VioletSpot from '../assets/images/Ellipse-1.png';
// import MediaQuery from 'react-responsive';
// import { useMediaQuery } from 'react-responsive';
// import { redirect } from 'react-router-dom';

// const Wrap = styled.div`
//   ${props => props.theme.breakpoints.desc} {
//     content: '';
//     position: absolute;
//     z-index: -1;
//     right: 0;
//     left: 0;
//     height: 100%;
//     background-image: url(${EllipseUp});
//     // background-image: url(${EllipseUp}), url(${EllipseDown});
//     background-repeat: no-repeat;
//     background-position: right top;
//     // background-position: right top, left bottom;
//     // filter: blur(20px);
//   }
// `;

const Wrapper = styled.div`
  ${props => props.theme.breakpoints.tab} {
    /* overflow: hidden; */
    /* background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.4)
      ),
      url(${VioletSpot}), url(${PinkSpot});
    background-repeat: no-repeat, no-repeat;
    background-position: -133.33px 655px, 380.41px -183px; */
    /* background-color: rgba(255, 255, 255, 0.4); */
  }

  ${props => props.theme.breakpoints.desc} {
    display: flex;
    /* background-image: url(${VioletSpot}), url(${PinkSpot});
    background-repeat: no-repeat, no-repeat;
    height: 100vh;
    background-position: -150.33px 305px, 756.41px -143px; */
    // backdrop-filter: blur(25px);
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
      {/* <Wrap> */}
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
      {/* </Wrap> */}
    </>
  );
};

export default Home;
