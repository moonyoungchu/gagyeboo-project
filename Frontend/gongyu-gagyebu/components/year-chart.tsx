import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  //   Title,
  //   Tooltip,
  //   Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  //   Title,
  //   Tooltip,
  //   Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
      text: "연간 소비 차트",
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: true,
      },
    },
  },
};

export const data = {
  labels: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  datasets: [
    {
      label: "월별총액",
      data: [
        300000, 40000, 50000, 200000, 500000, 300000, 40000, 50000, 200000,
        500000, 23423, 54543,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointStyle: "circle",
        pointRadius: 5,
        pointHoverRadius: 10,
    },
  ],
};

export default function YearChart() {
  return <Line id="year" options={options} data={data} />;
}
