// src/components/Logout.jsx
import React from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("User logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;