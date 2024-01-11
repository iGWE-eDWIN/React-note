import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';

const Login = ({ onLogin }) => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => {
      return {
        ...prevLogin,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(login);
    setLogin({
      username: '',
      password: '',
    });
  };

  return (
    <div className='note input-container'>
      <form className='create-note'>
        <div>
          <input
            name='username'
            placeholder='Username'
            value={login.username}
            type='text'
            onChange={handleChange}
            className='inputTag'
          />
        </div>
        <div>
          <input
            name='password'
            placeholder='Password'
            value={login.password}
            type='password'
            onChange={handleChange}
            className='inputTag'
          />
        </div>
        <Fab onClick={handleSubmit}>
          <LoginIcon />
        </Fab>
      </form>
    </div>
  );
};

export default Login;
