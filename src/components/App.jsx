import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import TestCom from './TestCom/TestCom ';
import CurrencyPage from 'pages/CurrencyPage';
import { LoginPage, RegistrationPage } from 'pages';
import Home from 'pages/HomePage';
import Container from './Container';
import DiagramPage from 'pages/DiagramPage';

export const App = () => {
  return (
    // <Container>
      <Routes>
        {/* <Route path="/" element={<Header />}> */}
          <Route path="home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/diagram" element={<DiagramPage />} />
          <Route path="/currency" element={<CurrencyPage />} />
          <Route path="/test" element={<TestCom />} />
          <Route path="*" element={<p>Not found</p>} />
        {/* </Route> */}
      </Routes>
    // </Container>
  );
};
