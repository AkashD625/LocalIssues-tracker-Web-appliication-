import React, { useState } from 'react';
import { signupUser } from '../services/api';

const SignupModal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await signupUser({ email, password });
      closeModal(); // Close modal after successful signup
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default SignupModal;
