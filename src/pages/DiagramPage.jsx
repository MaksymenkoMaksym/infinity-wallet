import Chart from 'components/Chart';
import Navigation from 'components/Navigation';
import Table from 'components/Table';
import React from 'react';

const DiagramPage = () => {
  return (
    <>
      <Navigation />
      <h1>Статистика</h1>
       <Chart />
      <Table />
    </>
  );
};

export default DiagramPage;
