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
  padding-bottom: 32px;

  ${props => props.theme.breakpoints.tab} {
    width: 334px;
    height: 334px;
    margin: 0;
    padding: 0;
    padding-right: 32px;
  }
`;
const getData = transactions => {
  const tdata = transactions.filter(item => item.total !== 0);
  const data =
    tdata.length !== 0
      ? {
          labels: tdata.map(item =>
            item.name !== 'Income' ? item.name : null
          ),

          datasets: [
            {
              data: tdata.map(item =>
                item.name !== 'Income' ? item.total : null
              ),
              backgroundColor: theme.colors.diagram,
              borderWidth: 1,
              hoverOffset: 10,
              cutout: '70%',
            },
          ],
        }
      : {
          datasets: [
            {
              data: [1],
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderWidth: 1,
              hoverOffset: 10,
              cutout: '70%',
            },
          ],
        };
  return data;
};

const getOptions = transactions => {
  const tData = transactions.filter(item => item.total !== 0);
  const options =
    tData.length !== 0
      ? {
          plugins: {
            legend: {
              display: false,
            },
          },
          layout: {
            padding: 7,
          },
        }
      : {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          layout: {
            padding: 7,
          },
        };
  return options;
};

const Chart = ({ dataTransactions }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { periodTotal } = useSelector(selectTransactionsForPeriod);

  const data = getData(dataTransactions);
  const options = getOptions(dataTransactions);
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
        const text = '₴ ' + periodTotal.toFixed(2),
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <Div>
      <h1>Statistics</h1>
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
