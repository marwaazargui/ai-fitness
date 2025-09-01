import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Your original data from the Recharts component
const macroData = [
  { name: "Protein", value: 30 },
  { name: "Carbs", value: 50 },
  { name: "Fat", value: 20 },
];

const MacroBreakdown = () => {
  // Extract the values and names from the macroData
  const seriesValues = macroData.map(item => item.value);
  const chartLabels = macroData.map(item => item.name);

  const chartState :any = {
    series: seriesValues,
    options: {
      chart: {
        type: 'donut',
      },
      labels: chartLabels, // ApexCharts uses a `labels` array for the names
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
 
      legend: {
        position: 'bottom'
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function(val:any) {
            return `${val}%`;
          }
        }
      }
    },
  };

  return (
    <div className="p-6  from-white via-blue-50 to-green-50 border border-gray-100 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
        Macronutrient Breakdown
      </h2>
      <div id="chart">
        <ReactApexChart options={chartState.options} series={chartState.series} type="donut" />
      </div>
    </div>
  );
};

export default MacroBreakdown;