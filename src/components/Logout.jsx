import React from "react";
import { useAuth } from "../utils/AuthContext";
import { auth } from "../utils/firebase";

const LogoutButton = () => {
  const { signOut } = auth.signOut()

  return (
    <button onClick={signOut}>
      Logout
    </button>
  );
};

export default LogoutButton;
