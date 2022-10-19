import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import MediaQuery from 'react-responsive';
import React from 'react';
import CurrencyPage from 'pages/CurrencyPage';

const TestCom = () => {
  return (
    <>
      <Navigation />
      <CurrencyPage />
    </>
  );
};

export default TestCom;
