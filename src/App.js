import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './form/Form';
import DashboardLayout from './Components/DashboardLayout';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import UserManagement from './Pages/UserManagement';
import FetchPhotos from './Pages/FetchPhotos';
import UsersTable from './Pages/UsersTable'
import Post from './Pages/Post'
import TodoList from './Pages/TodoList'
import './App.css';

const App = () => {
  return (
    <Routes>
      {/* Registration form */}
      <Route path="/" element={<Form />} />

      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element = {<UserManagement/>} />
        <Route path="FetchPhotos" element = {<FetchPhotos />} />
        <Route path="UsersTable" element = {<UsersTable/>} />
        <Route path="Post" element = {<Post/>} />
        <Route path="TodoList" element = {<TodoList/>} />

      </Route>
    </Routes>
  );
};

export default App;
