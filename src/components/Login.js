// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Login.css"; // Import external CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { username, password };

    try {
      const response = await fetch(
        "https://flumenadmin.ue.r.appspot.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        navigate("/components/home"); // Redirect to the Home page upon successful login
      } else {
        setErrorMessage("Invalid credentials"); // Set a generic error message
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Invalid credentials"); // Set a generic error message in case of an exception
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Conditionally render the error message */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="register-link">
        Don't have an account?{" "}
        <Link to="/components/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
