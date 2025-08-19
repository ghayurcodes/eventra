import React, { useState } from "react";
import "./Login.css"; 

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="login-container">
      <div className="login-card">

        
        <div className="login-left">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" 
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.7C17.3 17 20 13 20 10A8 8 0 0 0 12 2a8 8 0 0 0-8 8c0 3 2.7 7 8 11.7z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>EVENTRA</span>
          </div>
          <h1>Discover events happening around you in Pakistan</h1>
        </div>

       
        <div className="login-right">
         
          <div className="tabs">
            <button 
              onClick={() => setActiveTab("login")}
              className={activeTab === "login" ? "active" : ""}
            >
              Log in
            </button>
            <button 
              onClick={() => setActiveTab("signup")}
              className={activeTab === "signup" ? "active" : ""}
            >
              Sign up
            </button>
          </div>

         
          <div className="form">
            <input type="text" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot">Forgot password?</a>
            <button className="btn-primary">Log in</button>
          </div>

          
          <div className="separator">
            <hr /> <span>or</span> <hr />
          </div>

          
          <button className="btn-secondary">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
