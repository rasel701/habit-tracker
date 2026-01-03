import React from "react";
import Chart from "react-apexcharts";

const MyCategoryChart = ({ mychart = [] }) => {
  const series = mychart.map((item) => item.count);

  const options = {
    chart: {
      type: "pie",
    },

    labels: mychart.map((item) => item._id),

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
      <h2 className="text-gray-400 text-center text-lg mb-2">My Categories</h2>

      {/* Responsive Container */}
      <div className="w-full md:w-[200px] lg:w-[300px] xl:w-[400px] mx-auto bg-base-200 rounded-xl p-4 shadow-md">
        {series.length > 0 ? (
          <Chart options={options} series={series} type="pie" width="100%" />
        ) : (
          <p className="text-center">No data available</p>
        )}
      </div>
    </div>
  );
};

export default MyCategoryChart;
