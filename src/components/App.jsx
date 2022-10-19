import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import TestCom from './TestCom/TestCom ';
import CurrencyPage from 'pages/CurrencyPage';
import { LoginPage, RegistrationPage } from 'pages';
import Home from 'pages/HomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
          <Route path="/test" element={<TestCom />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </div>
  );
};
