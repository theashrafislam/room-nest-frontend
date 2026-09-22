import React from 'react'
import useAuth from '../hooks/useAuth'

function PrivateRoute({ children }) {

  const {user} = useAuth();
  console.log(user)

  return (
    <div>This is a private Route Or This is a private page.</div>
  )
}

export default PrivateRoute