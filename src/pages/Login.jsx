import React, { useState } from "react";
import { auth } from "../utils/firebase"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.css";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 state for toggling

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! 🎉");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful! ✅");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.logincontainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginLeft}>
          <div className={styles.logo}>
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

        <div className={styles.loginRight}>
          <div className={styles.tabs}>
            <button 
              onClick={() => { setActiveTab("login"); setError(""); }}
              className={activeTab === "login" ? styles.active : ""}
            >
              Log in
            </button>
            <button 
              onClick={() => { setActiveTab("signup"); setError(""); }}
              className={activeTab === "signup" ? styles.active : ""}
            >
              Sign up
            </button>
          </div>

          <div className={styles.form}>
            <input 
              type="text" 
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

           
            <div className={styles.passwordWrapper}>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span 
                className={styles.eye} 
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </span>
            </div>

            {error && <p className={styles.error}>Invalid Credentials!</p>}

            {activeTab === "login" ? (
              <button className={styles.btnPrimary} onClick={handleLogin}>
                Log in
              </button>
            ) : (
              <button className={styles.btnPrimary} onClick={handleSignup}>
                Sign up
              </button>
            )}
          </div>

          <div className={styles.separator}>
            <hr /> <span>or</span> <hr />
          </div>

          <button className={styles.btnSecondary}>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
