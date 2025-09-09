import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/authSlice';
import { authService } from '../../services/auth';

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check if we have a token but no user in Redux state
    const token = localStorage.getItem('authToken');
    const storedUser = authService.getCurrentUser();
    
    if (token && storedUser && !user) {
      console.log('Restoring user from localStorage:', storedUser);
      dispatch(setUser(storedUser));
    }
  }, [dispatch, user]);

  return <>{children}</>;
};

export default AuthInitializer;