import React from 'react';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cookies = new Cookies();

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove("TOKEN", { path: "/" });
    setTimeout(() => {
        navigate('/')
      }, 3000);
      toast.success('You are Logout Now , See You Soon');
  };

  return (
    <>
   

    <ToastContainer />
    <Button onClick={handleLogout} variant="contained" color="primary">
      Logout
    </Button>
    </>
  );
};

export default LogoutButton;
