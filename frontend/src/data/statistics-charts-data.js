import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Layoffs",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Q1","Q2","Q3","Q4","Q1","Q2","Q3"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Layoffs",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTaskChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
      name: "Hiring",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};

const companyLayoffChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Layoffs",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#ff0000",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Google","Apple","Meta","Amazon","Discord","CitiGroup","Unity"],
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Quaterly Layoffs",
    description: "",
    footer: "A bar graph for Quaterly Layoffs",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Monthly Layoffs",
    description: "15% increase in this month's layoffs",
    footer: "A Line Graph for Monthly Layoffs",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Monthly Hiring",
    description: "2% increase in this month's hiring",
    footer: "A Line Graph for Monthly Hiring",
    chart: completedTasksChart,
  },
  {
    color: "white",
    title: "Layoffs per Company",
    description: "",
    footer: "A Bar Graph for per Company Layoffs",
    chart: companyLayoffChart,
  },
];

export default statisticsChartsData;
