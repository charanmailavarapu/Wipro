import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Common/Header';
import Sidebar from '../components/Common/Sidebar';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Update user profile logic would go here
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUserData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-content">
        <Sidebar />
        <main className="profile-main">
          <div className="profile-header">
            <h1>Your Profile</h1>
          </div>
          
          <div className="profile-card">
            <div className="profile-avatar">
              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
            </div>
            
            <div className="profile-details">
              <div className="detail-group">
                <label>First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{user?.firstName}</p>
                )}
              </div>
              
              <div className="detail-group">
                <label>Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{user?.lastName}</p>
                )}
              </div>
              
              <div className="detail-group">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{user?.email}</p>
                )}
              </div>
              
              <div className="detail-group">
                <label>Role</label>
                <p className="role-badge">{user?.role}</p>
              </div>
            </div>
            
            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button className="btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="btn-primary" onClick={handleSave}>
                    Save Changes
                  </button>
                </>
              ) : (
                <button className="btn-primary" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;