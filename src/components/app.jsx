import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import AuthContainer from './authContainer';
import Home from './home';
import { postJSON } from './API';

const App = () => {
  const [isloggedIn, setLoggedIn] = useState(false);
  const [fetchData, setFectchData] = useState(null);
  const [boolValue, setBoolValue] = useState(true);

  const handleLogin = async (details) => {
    // console.log(details);
    const data = await postJSON(
      'https://edwin-note-api-d581200c51fb.herokuapp.com/users/login',
      details
    );
    console.log(data);
    const token = data.token;
    localStorage.setItem('authToken', token);
    // sessionStorage.setItem('authToken', token);
    setFectchData(data);
    if (data) setLoggedIn(true);
    setBoolValue(false);
  };

  const handleSignUP = async (details) => {
    // console.log(details);
    const data = await postJSON(
      'https://edwin-note-api-d581200c51fb.herokuapp.com/users',
      details
    );
    console.log(data);
    const token = data.token;
    localStorage.setItem('authToken', token);
    // sessionStorage.setItem('authToken', token);
    setFectchData(data);
    if (data) setLoggedIn(true);
    setBoolValue(false);
  };

  const handleLogOut = async () => {
    const token = localStorage.getItem('authToken');
    const logOut = await postJSON(
      'https://edwin-note-api-d581200c51fb.herokuapp.com/users/logoutAll',
      token
    );
    // console.log(logOut);
    if (!logOut) return;
    setBoolValue(true);
    setLoggedIn(false);
    localStorage.removeItem('authToken');
    // sessionStorage.removeItem('authToken');
  };
  return (
    <div className='container'>
      <Header boolean={boolValue} onLogOut={handleLogOut} />
      {isloggedIn ? (
        <Home />
      ) : (
        <AuthContainer onLogin={handleLogin} onSignUP={handleSignUP} />
      )}
      <Footer></Footer>
    </div>
  );
};

export default App;
