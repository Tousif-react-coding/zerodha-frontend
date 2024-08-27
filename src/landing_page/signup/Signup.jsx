import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {Button}  from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [signup , setSignup] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/api/signup',
      data: formData,
    };
  
    try {
      // Await the result of the axios request
      const result = await axios(configuration);
      
      // Handle successful registration
      setSignup(true);
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      toast.success('Registration Successful');
      setTimeout(() => {
        navigate('/')
      }, 4000);
      
    } catch (error) {
      // Handle any errors that occurred during registration
      toast.error('Registration Failed');
      console.error(error); // Log error details for debugging
    }
  };
  
  
  return (
    <section className="sign-bg">

    
    <div className="container mt-5">
     <ToastContainer/>
      <div className="row">
        <h3 className="text-start offset-3">Sign Up Here</h3>
       
       
        <div className="col-lg-6 col-md-6 col-sm-12 my-2">
          <img src="/media/images/signup.png" alt="Signup" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 mx-2 my-2">
        <div className="offset-3">     
        </div>
          <form onSubmit={handleSubmit}>
           
             <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

             
             
                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
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
                Register
              </button>
             
          </form>
        </div>
      </div>
     
    </div>
    </section>
  );
};

export default Signup;
