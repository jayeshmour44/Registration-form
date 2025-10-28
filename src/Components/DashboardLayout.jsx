import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <Outlet /> {/* Child routes render here */}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
