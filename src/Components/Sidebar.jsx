import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/dashboard" end>Dashboard</NavLink></li>
          <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
          <li><NavLink to="/dashboard/settings">Settings</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;




