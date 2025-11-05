import React, { useState, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Load user data from localStorage when the component mounts
  useEffect(() => {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');
    const mobile = localStorage.getItem('userMobile');

    // If any data exists in localStorage, add it as a user entry
    if (name && email && mobile) {
      setUsers([{ name, email, password, mobile }]);
    }
  }, []);

  // ✅ Save latest user data line-by-line (not JSON)
  useEffect(() => {
    if (users.length > 0) {
      const lastUser = users[users.length - 1];
      localStorage.setItem('userName', lastUser.name);
      localStorage.setItem('userEmail', lastUser.email);
      localStorage.setItem('userPassword', lastUser.password);
      localStorage.setItem('userMobile', lastUser.mobile);
    }
  }, [users]);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle form submit (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.mobile) {
      alert('Please fill all fields');
      return;
    }

    let updatedUsers;
    if (editIndex !== null) {
      updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setEditIndex(null);
    } else {
      updatedUsers = [...users, formData];
    }

    setUsers(updatedUsers);
    setFormData({ name: '', email: '', password: '', mobile: '' });
  };

  // ✅ Handle delete
  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);

      // Clear localStorage if deleted user was the only one
      if (updatedUsers.length === 0) {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPassword');
        localStorage.removeItem('userMobile');
      }
    }
  };

  // ✅ Handle edit
  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  return (
    <div className="user-container">
      <h2>User Management</h2>

      {/* Add/Edit Form */}
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <button type="submit">
          {editIndex !== null ? 'Update User' : 'Add User'}
        </button>
      </form>

      {/* Table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.mobile}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
