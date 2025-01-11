// Register.js
import React, { useState } from "react";
import "./Register.css"; // Import the CSS file for styling

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = { username, password, email };

    try {
      const response = await fetch(
        "https://flumenadmin.ue.r.appspot.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        alert("Registration successful! Please log in.");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/components/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
