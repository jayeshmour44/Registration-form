import React, { useState, useEffect } from 'react';
import './Settings.css'

const Settings = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // ✅ Load data from localStorage when component mounts
  /*useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('userEmail');
    const storedMobile = localStorage.getItem('userMobile');

    if (storedName || storedEmail || storedMobile) {
      setProfile({
        name: storedName || '',
        email: storedEmail || '',
        mobile: storedMobile || '',
      });
    }
  }, []);*/

  // handle profile input
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // handle password input
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // save updated profile
  const handleProfileSave = (e) => {
    e.preventDefault();

    // save to localStorage
    localStorage.setItem('userName', profile.name);
    localStorage.setItem('userEmail', profile.email);
    localStorage.setItem('userMobile', profile.mobile);

    alert('✅ Profile information updated successfully!');
  };

  // change password
  const handlePasswordSave = (e) => {
    e.preventDefault();

    const storedPassword = localStorage.getItem('userPassword');

    if (passwordData.oldPassword !== storedPassword) {
      alert('❌ Old password is incorrect!');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('⚠️ New passwords do not match!');
      return;
    }

    // save new password
    localStorage.setItem('userPassword', passwordData.newPassword);
    alert('✅ Password updated successfully!');

    // reset password fields
    setPasswordData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      {/* Edit Profile Info */}
      <section className="settings-section">
        <h3>Edit Profile Information</h3>
        <form onSubmit={handleProfileSave}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              required
            />
          </label>

          <label>
            Mobile:
            <input
              type="text"
              name="mobile"
              value={profile.mobile}
              onChange={handleProfileChange}
              required
            />
          </label>

          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </form>
      </section>

      {/* Change Password */}
      <section className="settings-section">
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordSave}>
          <label>
            Old Password:
            <input
              type="password"
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={handlePasswordChange}
              required
            />
          </label>

          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              required
            />
          </label>

          <label>
            Confirm New Password:
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              required
            />
          </label>

          <button type="submit" className="save-btn">
            Update Password
          </button>
        </form>
      </section>
    </div>
  );
};

export default Settings;
