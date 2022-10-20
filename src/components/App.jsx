import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import TestCom from './TestCom/TestCom ';
import CurrencyPage from 'pages/CurrencyPage';
import { LoginPage, RegistrationPage } from 'pages';
import Home from 'pages/HomePage';
import Container from './Container';
import DiagramPage from 'pages/DiagramPage';
import { refreshUser } from 'redux/auth/authOperation';
import { selectIsLoading } from 'redux/auth/authSelectors';
import Loader from './Loader';

export const App = () => {
  const { isLoading } = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/diagram" element={<DiagramPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
          <Route path="/test" element={<TestCom />} />
          <Route path="*" element={<Navigate to={'/home'} />} />
        </Route>
        <Route path="*" element={<Navigate to={'/home'} />} />
      </Routes>
    </Container>
  );
};
