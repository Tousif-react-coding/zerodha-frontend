import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Login = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [login , setLogin] = useState(false)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit =  (event) => {
    event.preventDefault();

    const configuration = {
      method:'post',
      url: 'https://zerodha-backend-t5mh.onrender.com/api/login',
      data: formData,
    
    }
   axios(configuration)
   .then((result) => {
     // set the cookie
     cookies.set("TOKEN", result.data.token, {
      path: "/",
    });
    //window.location.href = '/'; //auth route
    setLogin(true);
    setFormData({
      email: '',
      password: '',
    });
    setTimeout(() => {
      navigate('/dashboard')
    }, 4000);
    toast.success('Login Successful');
  })
  .catch((error) => {
    toast.error('Login Failed');
    error = new Error();
  });
  };

  return (
    <section className="sign-bg">
      <div className="container mt-5">
        <ToastContainer />
        <div className="row">
          <h3 className="text-start offset-3">Login Here</h3>
          <div className="col-lg-6 col-md-6 col-sm-12 my-2">
            <img src="/media/images/signup.png" alt="Login" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mx-2 my-2">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className={passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                  </span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p>Don't have an account,go to signup first &nbsp;
                <Link to="/signup">Signup</Link>
              </p>
              
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Login;
