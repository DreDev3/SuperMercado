import React from 'react';
import { Navigate, Outlet,useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ isClosed }) {
  const isLoggedIn = false;
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={{ prevPath: location.pathname }} replace />;
  }

  return <Outlet />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  isClosed: PropTypes.bool,
};
