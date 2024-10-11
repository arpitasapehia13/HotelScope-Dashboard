
import React, { useState } from 'react';
import DateRangePicker from './components/DateRangePicker';
import bookings from './data/bookings.json';

const App = () => {
  const [filteredData, setFilteredData] = useState(bookings);

  const handleDateChange = (start, end) => {
    const filtered = bookings.filter(booking => {
      const bookingDate = new Date(
        booking.arrival_date_year,
        booking.arrival_date_month - 1,
        booking.arrival_date_day_of_month
      );
      return bookingDate >= start && bookingDate <= end;
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>Hotel Bookings Dashboard</h1>
      <DateRangePicker onDateChange={handleDateChange} />
      {/* Add Charts here */}
    </div>
  );
};

export default App;
