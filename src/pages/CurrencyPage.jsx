import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer } from 'react-toastify';
import { useError } from 'utility/hoooks';
import { Navigate } from 'react-router-dom';


const CurrencyPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  useError()
  return (
    <div style={{ backgroundColor: '#f1f2f5', height: '100vh' }}>
      {isMobile ? (
        <>
          <Navigation />
          <Currency />
          <ToastContainer/>
        </>
      ) : (
        <Navigate to="/Home" />
      )}
    </div>
  );
};

export default CurrencyPage;
