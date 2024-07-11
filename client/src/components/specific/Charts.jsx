import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Filler, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend } from 'chart.js';
import { getLast7days } from '../../lib/features';

ChartJs.register(Tooltip, Filler, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend);

const labels=getLast7days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels ,
    datasets: [{
      label: "Revenue",
      fill: false,
      data: value,
      backgroundColor: "#6082B6",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    }],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  cutout:120,
};

const DoughnutChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [{
      label: "Total Chats vs Group Chats",
      data: value,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      hoverBackgroundColor:[
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      offset:10,
    }],
  };
  return <Doughnut
  style={{ zIndex:10}}
   data={data} options={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
