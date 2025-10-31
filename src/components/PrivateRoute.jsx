import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust if your context file is in a different path

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // check if user is logged in

  if (!user) {
    // if not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // otherwise render the protected page
};

export default PrivateRoute;
