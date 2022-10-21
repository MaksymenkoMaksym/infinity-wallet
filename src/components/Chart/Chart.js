import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { theme } from '../../utility/theme';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectTransactionsForPeriod } from 'redux/transactions/transactionsSelectors';

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

const Chart = ({ dataTransactions }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { periodTotal } = useSelector(selectTransactionsForPeriod);

  const data = {
    labels: dataTransactions.map(item =>
      item.name !== 'Income' ? item.name : null
    ),

    datasets: [
      {
        data: dataTransactions.map(item =>
          item.name !== 'Income' ? item.total : null
        ),
        backgroundColor: theme.colors.diagram,
        borderWidth: 1,
        hoverOffset: 10,
        cutout: '70%',
      },
    ],
  };

  const options = {
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
        const text = '$ ' + periodTotal.toFixed(2),
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

Chart.propTypes = {
  dataTransactions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};

export default Chart;
