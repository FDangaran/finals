import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="content">
      <form className="form" method="post" action="" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" placeholder="Enter First Name" />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" placeholder="Enter Last Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter Password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type={showPassword ? "text" : "password"} id="confirm_password" name="confirm_password" />
        </div>
        <p>
          <input type="checkbox" onChange={togglePasswordVisibility} /> Show Password
        </p>
        <div className="form-group">
          <button type="submit" name="register">Register</button>
        </div>
        <div className="bottom-header">
          <p>Already have an account?<Link to="/Login"> Login here!</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
