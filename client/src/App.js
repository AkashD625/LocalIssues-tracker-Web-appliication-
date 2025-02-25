import React, { useState } from 'react';
import './App.css';
// import logo from './logo.svg';
// import logo from './logo.svg';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import { AuthContext } from './context/AuthContext';

function App() {
  const [user, setUser] = useState(null); // Track login state

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Navbar />
        {user ? <HomePage /> : <LandingPage />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
