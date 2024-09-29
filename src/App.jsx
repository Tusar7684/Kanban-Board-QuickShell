
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import StatusFilterPage from './pages/StatusFilterPage/statusFilterPage.jsx';
import UserFilterPage from './pages/UserFilterPage/userFilterPage.jsx';
import PriorityFilterPage from './pages/PriorityFilterPage/priorityFilterPage.jsx';  // Import PriorityFilterPage
import progress from './utils/progress';  // Import progress from the correct path

function App() {
  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Log the data for debugging
  console.log("Data fetched:", data);

  // Handle loading and error states
  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">Error: {error}</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<StatusFilterPage tickets={data.tickets} progress={progress} />}
        />
        <Route
          path='/user-filter'
          element={<UserFilterPage users={data.users} tickets={data.tickets} />}
        />
        <Route
          path='/priority-filter'
          element={<PriorityFilterPage tickets={data.tickets} />}  // Pass the tickets to PriorityFilterPage
        />
        {/* Catch-all route for invalid paths */}
        <Route
          path='*'
          element={<div>Page not found</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
