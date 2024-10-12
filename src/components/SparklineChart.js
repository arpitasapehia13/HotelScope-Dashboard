import React from 'react';
import Chart from 'react-apexcharts';
import '../styles/Charts.css';

const SparklineChart = ({ data }) => {
  const totalAdults = data.reduce((acc, item) => acc + item.adults, 0);
  const totalChildren = data.reduce((acc, item) => acc + item.children, 0);

  const seriesAdults = [{ data: data.map(item => item.adults) }];
  const seriesChildren = [{ data: data.map(item => item.children) }];

  const optionsAdults = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
      background: '#1e1e1e',
    },
    stroke: {
      width: 2,
      colors: ['#03dac6'],
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: (val) => `Adults: ${val} (Total: ${totalAdults})`,
      },
    },
  };

  const optionsChildren = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
      background: '#1e1e1e',
    },
    stroke: {
      width: 2,
      colors: ['#bb86fc'],
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: (val) => `Children: ${val} (Total: ${totalChildren})`,
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="totals">
        <div className="total-item">
          <strong>Total Adults:</strong> {totalAdults}
        </div>
        <Chart options={optionsAdults} series={seriesAdults} type="line" height={100} />
      </div>
      <div className="totals">
        <div className="total-item">
          <strong>Total Children:</strong> {totalChildren}
        </div>
        <Chart options={optionsChildren} series={seriesChildren} type="line" height={100} />
      </div>
    </div>
  );
};

export default SparklineChart;
