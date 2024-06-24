// src/components/ProtectedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "./firebase"; // Correct import path
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;