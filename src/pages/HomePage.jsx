import Balance from 'components/Balance/Balance';
import Chart from 'components/Chart';
import Currency from 'components/Currency/Currency';

import Navigation from 'components/Navigation/Navigation';
import Table from 'components/Table';

// import MediaQuery from 'react-responsive';
// import { useMediaQuery } from 'react-responsive';
// import { redirect } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navigation />
      <Balance />
      <Currency />
      <Chart />
      <Table />
    </>
  );
};

export default Home;
