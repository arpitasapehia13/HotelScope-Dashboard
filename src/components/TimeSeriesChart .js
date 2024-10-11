
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TimeSeriesChart = ({ data }) => {
  const series = [{
    name: 'Visitors',
    data: data.map(item => ({
      x: new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`),
      y: item.adults + item.children + item.babies
    }))
  }];

  const options = {
    chart: {
      type: 'line',
      zoom: { enabled: true }
    },
    xaxis: {
      type: 'datetime'
    },
    title: {
      text: 'Number of Visitors per Day'
    }
  };

  return (
    <ReactApexChart options={options} series={series} type="line" height={350} />
  );
};

export default TimeSeriesChart;
