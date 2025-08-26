import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out ✅");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
