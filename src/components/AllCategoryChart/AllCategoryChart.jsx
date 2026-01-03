import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const AllCategoryChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    labels: [],
  });

  useEffect(() => {
    const getData = async () => {
      const res = await axios(
        `https://habit-server-psi.vercel.app/dashboard/category-status`
      );
      const result = res.data;

      setChartData({
        labels: result.map((item) => item._id),
        series: result.map((item) => item.count),
      });
    };

    getData();
  }, []);

  const options = {
    chart: {
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.5,
      },
    },

    stroke: { width: 0 },

    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: { showAlways: true, show: true },
          },
        },
      },
    },

    labels: chartData.labels,

    dataLabels: {
      dropShadow: { blur: 3, opacity: 1 },
    },

    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        enabled: true,
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines",
        ],
      },
    },

    states: { hover: { filter: "none" } },
    theme: { palette: "palette2" },

    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { width: "100%" },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="text-gray-400 text-center text-lg mb-2">All Categorys</h2>

      <div className="w-full md:w-[200px] lg:w-[300px] xl:w-[400px] mx-auto bg-base-200 rounded-xl p-4 shadow-md">
        {chartData.series.length > 0 ? (
          <Chart
            options={options}
            series={chartData.series}
            type="donut"
            width="100%"
          />
        ) : (
          <p className="text-center">Loading chart...</p>
        )}
      </div>
    </div>
  );
};

export default AllCategoryChart;
