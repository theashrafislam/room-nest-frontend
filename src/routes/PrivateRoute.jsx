import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router';
import LoadingSpinner from '../components/shared/LoadingSpinner';

function PrivateRoute() {

  const { user, loading } = useAuth();
  const location = useLocation();


  if(loading){
    return <LoadingSpinner fullScreen message="Preparing your room details..."/>
  }

  if (!user) {
    return <Navigate to={'/sign-in'} state={location?.pathname || '/'}/>
  }

  return <Outlet />
}

export default PrivateRoute