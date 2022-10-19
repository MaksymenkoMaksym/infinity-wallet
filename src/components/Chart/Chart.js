import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { theme } from '../../utility/theme';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    'Продукти',
    'Машина',
    'Загальні витрати',
    'Регулярний дохід',
    'Нерегулярний дохід',
    'Курси GoHOME',
  ],
  datasets: [
    {
      data: [22, 19, 58, 115, 50, 200],
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
      hoverOffset: 15,
      cutout: '70%',
    },
  ],
};

export const options = {
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
      const text = 'Total: $100',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];

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
  console.log(<Doughnut data={data.text} />);
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
