
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const countryCounts = data.reduce((acc, curr) => {
    acc[curr.country] = (acc[curr.country] || 0) + curr.adults + curr.children + curr.babies;
    return acc;
  }, {});

  const series = [{
    name: 'Visitors',
    data: Object.keys(countryCounts).map(country => ({
      x: country,
      y: countryCounts[country]
    }))
  }];

  const options = {
    chart: {
      type: 'bar'
    },
    xaxis: {
      type: 'category'
    },
    title: {
      text: 'Number of Visitors per Country'
    }
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
};

export default ColumnChart;
