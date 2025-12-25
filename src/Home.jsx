import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Build Modern React Apps</h1>
        <p>Professional UI • Clean Code • Secure Design</p>
        <Link to="/signup">
          <button className="hero-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
