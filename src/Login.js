import React, { useState } from 'react';
import './login-style.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    navigate('/Homepage');
  };

  return (
    <div className="content">
      <form className="form" method="post" action="" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter Password" />
        </div>
        <p>
          <input type="checkbox" onChange={togglePasswordVisibility} /> Show Password
        </p>
        <div className="form-group">
          <button type="button" name="login" onClick={handleLogin} >Login</button>
        </div>
        <div className="bottom-header">
          <p>A new user?<Link to="/Register"> Register here!</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
