import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // TODO: Add signup API integration here

    alert('Signup successful!');
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Join Foodie World</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            style={styles.input}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
            style={styles.input}
          />
          {error && <div style={styles.error}>{error}</div>}
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <div style={styles.footer}>
          Already have an account? <a href="#" style={styles.link}>Login here</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ff9a76, #ff6f61)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    backgroundColor: '#fff',
    color: '#333',
    padding: '2.5rem 3rem',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    width: '350px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1.5rem',
    color: '#ff6f61',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  input: {
    padding: '12px 15px',
    fontSize: '1rem',
    border: '2px solid #ff9a76',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  button: {
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    padding: '14px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: 'red',
    fontWeight: '600',
  },
  footer: {
    marginTop: '1.2rem',
    fontSize: '0.9rem',
  },
  link: {
    color: '#ff6f61',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default SignupPage;
