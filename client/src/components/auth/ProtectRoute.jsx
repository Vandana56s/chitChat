import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({ user, redirectTo = "/login" }) => {
  return user ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectRoute;
