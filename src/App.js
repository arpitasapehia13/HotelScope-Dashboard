import React, { useState, useEffect } from 'react';
import TimeSeriesChart from './components/TimeSeriesChart';
import SparklineChart from './components/SparklineChart';
import ColumnChart from './components/ColumnChart';
import DateRangePicker from './components/DateRangePicker';
import './styles/App.css';
import './styles/Charts.css';
import '../src/styles.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('/data/bookings.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Initialize with full data
      });
  }, []);

  const handleDateChange = (filtered) => {
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <h1>Hotel Booking Dashboard</h1>
      <div className="dashboard">
        <DateRangePicker data={data} onDateChange={handleDateChange} />
        <div className="chart-container">
          <TimeSeriesChart data={filteredData} />
        </div>
        <div className="chart-container">
          <SparklineChart data={filteredData} />
        </div>
        <div className="chart-container">
          <ColumnChart data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default App;
