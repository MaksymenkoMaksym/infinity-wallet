//import Chart from 'components/Chart';
import Header from 'components/Header';
import Navigation from 'components/Navigation/Navigation';
import Table from 'components/Table';
import React from 'react';

const DiagramPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <h1>Статистика</h1>
     {/* <Chart />  */}
      <Table />
    </>
  );
};

export default DiagramPage;
