import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

import { refreshUser } from 'redux/auth/authOperation';
import { selectIsLoading, selectToken } from 'redux/auth/authSelectors';

import Loader from './Loader';

import Header from './Header';
const Home = lazy(() => import('pages/HomePage'));
const DiagramPage = lazy(() => import('pages/DiagramPage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

export const App = () => {
  const { isLoading } = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectToken);
  const dispatch = useDispatch();
  useEffect(() => {
    isLoggedIn && dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {isLoggedIn && <Header />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/auth/login" component={<Home />} />
            }
          />
          <Route
            path="/diagram"
            element={
              <PrivateRoute
                redirectTo="/auth/login"
                component={<DiagramPage />}
              />
            }
          />
          <Route
            path="/currency"
            element={
              <PrivateRoute
                redirectTo="/auth/login"
                component={<CurrencyPage />}
              />
            }
          />
          <Route
            path="/auth/:authType"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegistrationPage />}
              />
            }
          />

          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </>
  );
};
