import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function ProtectedRoutes({ element: Component, ...rest }) {
  const location = useLocation();
  const token = cookies.get('TOKEN');
const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      // Show toast notification when user is not authenticated
    
      console.log('Toast should be shown now');
      toast.error('You must be logged in to access this page');
      setTimeout(() => {
        navigate('/login')
      }, 4000);
    }
   
   
  }, [token]);

  // Check if the user is authenticated
  if (token) {
    // If authenticated, render the component
    return Component;
  } else {
    // If not authenticated, redirect to the login page
    return (
      <>
    <ToastContainer/>
      
      {/* <Navigate
        to="/login"
        state={{ from: location }}
        replace
      /> */}
        </>
    );
  }
}
