import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TestCom from './TestCom/TestCom ';
import CurrencyPage from 'pages/CurrencyPage';
import { RegistrationPage } from 'pages';
import Home from 'pages/HomePage';
import Container from './Container';
import DiagramPage from 'pages/DiagramPage';
import { refreshUser } from 'redux/auth/authOperation';
import { selectIsLoading } from 'redux/auth/authSelectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
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
        <Route
          path="/"
          element={<PrivateRoute redirectTo="/login" component={<Home />} />}
        />
        <Route
          path="/test"
          element={<PrivateRoute redirectTo="/login" component={<TestCom />} />}
        />
        <Route
          path="/diagram"
          element={
            <PrivateRoute redirectTo="/login" component={<DiagramPage />} />
          }
        />
        <Route
          path="/currency"
          element={
            <PrivateRoute redirectTo="/login" component={<CurrencyPage />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<RegistrationPage />} />}
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Container>
  );
};
