import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  //Title,
  //Tooltip,
  //Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Context } from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  //Title,
  //Tooltip,
  //Legend,
  ChartDataLabels
);

export const options = {
  indexAxis: "y" as const,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
      text: "이번달 지출 차트",
    },
    legend: {
      display: false,
    },
    datalabels: {
      color: "black",
      formatter: function (value: number, context: Context) {
        return `${context.dataset.label}(${Math.ceil(value * 0.0001)}%)`;
      },
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
      stacked: true,
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
      stacked: true,
    },
  },
};

export const data = {
  labels: [""],
  datasets: [
    {
      label: "쓴 돈",
      data: [500000],
      barThickness: 35,
      backgroundColor: "rgb(255, 99, 132,0.5)",
      datalabels: {
        align: "center" as const,
        anchor: "center" as const,
      },
    },
    {
      label: "남은 돈",
      data: [300000],
      barThickness: 35,
      backgroundColor: "rgb(53, 162, 235, 0.5)",
      datalabels: {
        align: "center" as const,
        anchor: "center" as const,
      },
    },
  ],
};

export default function MonthChart() {
  return <Bar options={options} data={data} />;
}
