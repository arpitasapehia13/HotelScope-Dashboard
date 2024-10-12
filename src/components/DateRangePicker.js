import React, { useState } from 'react';
import '../styles/DateRangePicker.css';

const DateRangePicker = ({ data, onDateChange }) => {
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endDay, setEndDay] = useState('');

  const years = [...Array(15).keys()].map(i => 2010 + i);
  const months = [...Array(12).keys()].map(i => ({
    value: i + 1,
    label: new Date(0, i).toLocaleString('default', { month: 'long' }),
  }));
  const days = [...Array(31).keys()].map(i => i + 1);

  const handleStartYearChange = (event) => {
    const newYear = event.target.value;
    setStartYear(newYear);
    filterData(newYear, startMonth, startDay, endYear, endMonth, endDay);
  };

  const handleStartMonthChange = (event) => {
    const newMonth = event.target.value;
    setStartMonth(newMonth);
    filterData(startYear, newMonth, startDay, endYear, endMonth, endDay);
  };

  const handleStartDayChange = (event) => {
    const newDay = event.target.value;
    setStartDay(newDay);
    filterData(startYear, startMonth, newDay, endYear, endMonth, endDay);
  };

  const handleEndYearChange = (event) => {
    const newYear = event.target.value;
    setEndYear(newYear);
    filterData(startYear, startMonth, startDay, newYear, endMonth, endDay);
  };

  const handleEndMonthChange = (event) => {
    const newMonth = event.target.value;
    setEndMonth(newMonth);
    filterData(startYear, startMonth, startDay, endYear, newMonth, endDay);
  };

  const handleEndDayChange = (event) => {
    const newDay = event.target.value;
    setEndDay(newDay);
    filterData(startYear, startMonth, startDay, endYear, endMonth, newDay);
  };

  const filterData = (startYear, startMonth, startDay, endYear, endMonth, endDay) => {
    const startDate = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(endYear, endMonth - 1, endDay);

    const filtered = data.filter(item => {
      const itemDate = new Date(
        `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`
      );
      return itemDate >= startDate && itemDate <= endDate;
    });
    onDateChange(filtered);
  };

  return (
    <div className="date-range-picker">
      <h4>Select Date Range:</h4>
      <div className="date-picker">
        <span>From:</span>
        <select onChange={handleStartYearChange} value={startYear}>
          <option value="" disabled>Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select onChange={handleStartMonthChange} value={startMonth}>
          <option value="" disabled>Select Month</option>
          {months.map(month => (
            <option key={month.value} value={month.value}>{month.label}</option>
          ))}
        </select>
        <select onChange={handleStartDayChange} value={startDay}>
          <option value="" disabled>Select Day</option>
          {days.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
      <div className="date-picker">
        <span>To:</span>
        <select onChange={handleEndYearChange} value={endYear}>
          <option value="" disabled>Select Year</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select onChange={handleEndMonthChange} value={endMonth}>
          <option value="" disabled>Select Month</option>
          {months.map(month => (
            <option key={month.value} value={month.value}>{month.label}</option>
          ))}
        </select>
        <select onChange={handleEndDayChange} value={endDay}>
          <option value="" disabled>Select Day</option>
          {days.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateRangePicker;
