import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

function Dashboard() {
  const { connected } = useContext(AuthContext);

  if (connected.email && connected.email !== null) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
}

export default Dashboard;
