import React from 'react';
import Dashboardcharts from './Dashboard-charts'
import Dashboardcharts2 from './Dashboard-charts2'

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>Welcome to your dashboard overview.</p>
      <Dashboardcharts/>
      <Dashboardcharts2/>
    </div>
  );
};

export default Dashboard;
  