import React, { useState } from 'react';
import LoginModal from './LoginModel';
import SignupModal from './SignupModel';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <nav>
      <div className="logo">Social Issues Tracker</div>
      <div className="auth-buttons">
        {user ? (
          <button>Logout</button>
        ) : (
          <>
            <button onClick={() => setShowLoginModal(true)}>Login</button>
            <button onClick={() => setShowSignupModal(true)}>Sign Up</button>
          </>
        )}
      </div>

      {/* Modals */}
      {showLoginModal && <LoginModal closeModal={() => setShowLoginModal(false)} />}
      {showSignupModal && <SignupModal closeModal={() => setShowSignupModal(false)} />}
    </nav>
  );
};

export default Navbar;
