import React, { useState } from 'react';
import Login from './login';
import Signup from './signUp';

const AuthContainer = ({ onLogin, onSignUP }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleLogin = (details) => {
    // console.log(details);
    onLogin(details);
  };

  const handleSignUp = (details) => {
    onSignUP(details);
  };

  return (
    <div
      style={{
        // border: '1px solid black',
        marginTop: `${isLogin ? '5em' : 'none'}`,
      }}
      className='authContainer'
    >
      {isLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Signup onSignUP={handleSignUp} />
      )}
      <p style={{ fontSize: '0.75em', fontFamily: 'sans-serif' }}>
        {isLogin ? 'Dont have an account' : 'Already have an account'}
      </p>
      <button
        style={{
          width: '60px',
          border: 'none',
          color: '#f5ba13',
          borderRadius: '100%',
          cursor: 'pointer',
          marginTop: '5px',
        }}
        onClick={toggleView}
      >
        {isLogin ? 'Signup' : 'Login'}
      </button>
    </div>
  );
};

export default AuthContainer;
