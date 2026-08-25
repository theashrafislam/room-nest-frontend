import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <div className='flex min-h-screen flex-col bg-background'>

      <Navbar />

      <main className="flex-1"><Outlet /></main>

      <Footer />

    </div>
  )
}

export default RootLayout;