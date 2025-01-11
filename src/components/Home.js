// Home.js
import React from "react";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to the Home Page!</h2>
      <p className="home-message">You have successfully logged in.</p>
      <p className="home-instruction">
        Explore our features and enjoy your stay!
      </p>
      <button className="home-button" onClick={() => alert("Explore more!")}>
        Explore
      </button>
    </div>
  );
};

export default Home;
