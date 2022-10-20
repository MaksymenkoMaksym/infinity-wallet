import Currency from 'components/Currency/Currency';
import Header from 'components/Header';
import Navigation from 'components/Navigation/Navigation';
// import Navigation from 'components/Navigation/Navigation';
import React from 'react';
// import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';

const CurrencyPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  //   const isTab = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      {/* <Navigation /> */}
      {isMobile && (
        <>
          <Header />
          <Navigation />
          <Currency />
        </>
      )}
    </>
  );
  //   {
  //     /* //   return isMobile ? <redirect to="/" /> : <Currency />; */
  //   }
};

export default CurrencyPage;
