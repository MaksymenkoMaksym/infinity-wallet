import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const CurrencyPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div style={{ backgroundColor: '#f1f2f5', height: '100vh' }}>
      {isMobile && (
        <>
          <Navigation />
          <Currency />
        </>
      )}
    </div>
  );
};

export default CurrencyPage;
