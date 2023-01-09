import React from "react";
import Chart from "react-apexcharts";

const Overview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#ff929f"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };

  return (
    <div>
      <div className="overview">
        <div className="dh-1 text-stone-700 font-bold text-4xl font-sans">
          Audience Overview
        </div>
        <span className="text-stone-500 text-sm font-sans">
          
          Business Graph with Stats
        </span>
      </div>
      
      <div className="CustomerReview">
        <Chart options={data.options} series={data.series} type="area" />
      </div>
      <div className='flex flex-row space-x-12  ml-11 text-3xl font-sans font-extrabold' >
        <div className="e1">125</div>
        <div className="e1">14K</div>
        <div className="e1">0/45 sec</div>
    </div>
    <div className='ls flex flex-row space-x-14 pb-6 text-stone-700  ml-11 text-xs font-sans' >
        <div className="e1">Rate</div>
        <div className="e1">Viewer</div>
        <div className="e1">Server speed</div>
    </div>  
    </div>
  );
};

export default Overview;
