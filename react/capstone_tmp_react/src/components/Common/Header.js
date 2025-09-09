import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/profile');
    setShowDropdown(false);
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <h1 className="logo" onClick={() => navigate('/dashboard')}>
          TaskTool
        </h1>
      </div>
      
      <div className="header-right">
        <div className="user-menu">
          <div 
            className="user-info"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="user-avatar">
              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
            </div>
            <span className="user-name">
              {user?.firstName} {user?.lastName}
            </span>
          </div>
          
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={handleProfile}>
                Profile
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;