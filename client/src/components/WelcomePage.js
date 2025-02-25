import React, { useState } from 'react';
import './WelcomePage.css'; // For custom styling

// Assuming you have the login and sign-up modal components
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const WelcomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Function to open the login modal
  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  // Function to open the sign-up modal
  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  // Function to close the login modal
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  // Function to close the sign-up modal
  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="welcome-container">
      {/* Logo */}
      <div className="logo">
        <img src="/path-to-your-logo.svg" alt="Social Issues Tracker Logo" />
      </div>

      {/* Welcome Message */}
      <h1>Welcome to the Social Issues Tracker</h1>
      <p>Track and raise awareness about important social issues in your community.</p>

      {/* Buttons for Login and Signup */}
      <div className="auth-buttons">
        <button onClick={openLoginModal} className="btn login-btn">
          Login
        </button>
        <button onClick={openSignupModal} className="btn signup-btn">
          Sign Up
        </button>
      </div>

      {/* Login Modal */}
      {showLoginModal && <LoginModal closeModal={closeLoginModal} />}
      
      {/* Sign Up Modal */}
      {showSignupModal && <SignupModal closeModal={closeSignupModal} />}
    </div>
  );
};

export default WelcomePage;
