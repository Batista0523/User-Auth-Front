import React, { useState } from 'react';
import './registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    // here i need to ass logic to registration for example make a POST request to the server when the server is working

    console.log('Form Data:', formData);


    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
