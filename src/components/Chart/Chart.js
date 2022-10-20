import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { theme } from '../../utility/theme';
import { useSelector } from 'react-redux';

const Div = styled.div`
  width: 294px;
  height: 294px;
  margin: 0 auto;

  ${props => props.theme.breakpoints.tab} {
    width: 334px;
    height: 334px;
    margin: 0;
  }
`;

const Chart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const transactions = useSelector(
    state => state.transaction.transactionsForPeriod.categoriesSummary
  );
  const periodTotal = useSelector(
    state => state.transaction.transactionsForPeriod.periodTotal
  );

  const data = {
    labels: transactions.map(item => item.name),

    datasets: [
      {
        data: transactions.map(item => item.total),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 1,
        hoverOffset: 10,
        cutout: '70%',
      },
    ],
  };

  const options = {
    //responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 7,
    },
  };

  const fontWeight = theme.fontWeights.bold;
  const fontSize = theme.fontSizes.m;
  const mainFont = theme.fonts.main;

  const plugins = [
    {
      beforeDraw: function (chart) {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        ctx.font = `${fontWeight} ${fontSize} ${mainFont}`;
        ctx.textBaseline = 'center';
        const text = `${periodTotal}`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <Div>
      <Doughnut
        data={data}
        options={options}
        plugins={plugins}
        width={280}
        height={280}
      />
    </Div>
  );
};

export default Chart;
