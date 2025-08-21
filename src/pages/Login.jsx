import React, { useState } from "react";
// import { auth } from "./firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 
  const handleSignup = async () => {
    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   alert("Signup successful! 🎉");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

 
  const handleLogin = async () => {
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   alert("Login successful! ✅");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

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

          {/* Tabs */}
          <div className="tabs">
            <button 
              onClick={() => { setActiveTab("login"); setError(""); }}
              className={activeTab === "login" ? "active" : ""}
            >
              Log in
            </button>
            <button 
              onClick={() => { setActiveTab("signup"); setError(""); }}
              className={activeTab === "signup" ? "active" : ""}
            >
              Sign up
            </button>
          </div>

         
          <div className="form">
            <input 
              type="text" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            {activeTab === "login" ? (
              <>
                <a href="#" className="forgot">Forgot password?</a>
                <button className="btn-primary" onClick={handleLogin}>
                  Log in
                </button>
              </>
            ) : (
              <button className="btn-primary" onClick={handleSignup}>
                Sign up
              </button>
            )}
          </div>

          {/* Optional separator */}
          <div className="separator">
            <hr /> <span>or</span> <hr />
          </div>

          {/* You can add Google login here later */}
          <button className="btn-secondary">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
