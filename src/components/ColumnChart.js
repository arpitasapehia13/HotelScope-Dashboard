import React from 'react';
import Chart from 'react-apexcharts';
import '../styles/Charts.css';

const ColumnChart = ({ data }) => {
  const countries = [...new Set(data.map(item => item.country))];
  const series = [{
    name: 'Visitors',
    data: countries.map(country => {
      return data.filter(item => item.country === country)
        .reduce((acc, item) => acc + item.adults + item.children + item.babies, 0);
    })
  }];

  const options = {
    chart: {
      type: 'bar',
      background: '#1e1e1e'
    },
    xaxis: {
      categories: countries,
      labels: {
        style: {
          colors: '#cccccc'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#cccccc'
        }
      }
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: 0,
              to: 1000,
              color: '#bb86fc'
            }
          ]
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
