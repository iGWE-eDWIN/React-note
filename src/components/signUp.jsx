import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';

const SignUP = ({ onSignUP }) => {
  const [signUp, setSignUp] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSignUp((prevSingUp) => {
      return {
        ...prevSingUp,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUP(signUp);
    setSignUp({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
    });
  };

  return (
    <div
      className='note input-container'
      style={{
        height: '8em',
      }}
    >
      <form className='create-note'>
        <div>
          <input
            name='firstname'
            placeholder='Firstname'
            value={signUp.firstname}
            type='text'
            onChange={handleChange}
            className='inputTag'
          />
        </div>
        <div>
          <input
            name='lastname'
            placeholder='Lastname'
            value={signUp.lastname}
            type='text'
            onChange={handleChange}
            className='inputTag'
          />
        </div>
        <div>
          <input
            name='email'
            placeholder='Email'
            value={signUp.email}
            type='email'
            onChange={handleChange}
            className='inputTag'
          />
        </div>
        <div>
          <input
            name='username'
            placeholder='Username'
            value={signUp.username}
            type='text'
            onChange={handleChange}
            className='inputTag'
          />
        </div>
        <div>
          <input
            name='password'
            placeholder='Password'
            value={signUp.password}
            type='password'
            onChange={handleChange}
            className='inputTag'
          />
        </div>
        <Fab onClick={handleSubmit}>
          <AddBoxIcon />
        </Fab>
      </form>
    </div>
  );
};

export default SignUP;
