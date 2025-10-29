import React, { useEffect, useState } from 'react';
import './Profile.css'


const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });

  // Fetch data from localStorage when the component loads
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    const storedMobile = localStorage.getItem('userMobile');

    
      setUserData({
        name: storedName || '',
        email: storedEmail || '',
        password: storedPassword || '',
        mobile: storedMobile || '',
      });
    
  }, []);

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Password:</strong> {userData.password}</p>
        <p><strong>Mobile:</strong> {userData.mobile}</p>
      </div>
    </div>
  );
};

export default Profile;
