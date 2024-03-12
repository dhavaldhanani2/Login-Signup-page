import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username) {
      setError('User already exists. Please choose a different username.');
    } else {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      setSuccess('Account created successfully! You can now log in.');
      setUsername('');
      setPassword('');
      setError('');
      navigate('/login');
    }
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSignup}>
          Sign up
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="alert">{success}</p>}
      <p className="link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
