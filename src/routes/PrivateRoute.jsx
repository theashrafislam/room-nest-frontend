import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router';

function PrivateRoute({ children }) {

  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={'/sign-in'} state={location?.pathname || '/'}/>
  }

  return (
    <div>This is a private Route Or This is a private page.</div>
  )
}

export default PrivateRoute