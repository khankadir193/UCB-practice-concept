import React from "react";
import { Navigate } from "react-router-dom";

const RoleBasedRoute = ({ element: Component, allowedRoles, userRole }) => {
  return allowedRoles.includes(userRole) ? (
    Component
  ) : (
    <Navigate to="/unauthorized" replace />
  );
};

export default RoleBasedRoute;
