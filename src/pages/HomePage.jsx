import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

import Navigation from 'components/Navigation/Navigation';

// import MediaQuery from 'react-responsive';
// import { useMediaQuery } from 'react-responsive';
// import { redirect } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navigation />
      <Balance />
      <Currency />
    </>
  );
};

export default Home;
