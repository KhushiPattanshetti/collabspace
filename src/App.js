// App.js
import React, { useState } from 'react';
import Home from './components/Home/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'signin' && <SignIn navigateTo={navigateTo} onLogin={handleLogin} />}
      {currentPage === 'signup' && <SignUp navigateTo={navigateTo} />}
      {currentPage === 'dashboard' && isLoggedIn && <Dashboard navigateTo={navigateTo} onLogout={handleLogout} />}
    </div>
  );
}

export default App;