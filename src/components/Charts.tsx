import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarCharsProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export function BarCharst({
  data_1,
  data_2,
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels = months,
}: BarCharsProps) {
  const options: ChartOptions<"bar"> = {
    indexAxis: horizontal ? "y" : "x",

    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.3,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.3,
      },
    ],
  };

  return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
}

interface DoughtChartData {
  data_1: number[];
  labels: string[];
  backgoundcolor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
  border?: number;
}

export const DoughtChart = ({
  data_1,
  labels,
  backgoundcolor,
  cutout = 90,
  legends = true,
  offset = [0],
  border = 0,
}: DoughtChartData) => {
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: cutout,
    // layout: {
    //   lables :{
    //   }
    // },
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 10,
        },
      },
      title: {
        display: true,
      },
    },
  };
  const data: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        // label: title,
        data: data_1,
        backgroundColor: backgoundcolor,
        borderWidth: border,
        offset: offset,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};

interface PieChartData {
  data_1: number[];
  labels: string[];
  backgoundcolor: string[];
  offset?: number[];
}

export const PieCharts = ({
  data_1,
  labels,
  backgoundcolor,
  offset,
}: PieChartData) => {
  const option: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data: ChartData<"pie", number[], string> = {
    labels,
    datasets: [
      {
        // label: "# of Votes",
        data: data_1,
        backgroundColor: backgoundcolor,
        borderWidth: 1,
        offset,
      },
    ],
  };

  return <Pie data={data} options={option} />;
};

interface LineChartData {
  data_1: number[];
  labels?: string[];
  label: string;
  backgoundcolor: string;
  bordercolor: string;
}

export const LineCharts = ({
  data_1,
  labels = months,
  label,
  backgoundcolor,
  bordercolor,
}: LineChartData) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  const data: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data: data_1,
        backgroundColor: backgoundcolor,
        borderColor: bordercolor,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
