import React from 'react'
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div>

        <div><Outlet /></div>
        
    </div>
  )
}

export default RootLayout;