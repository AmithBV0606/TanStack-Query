import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className='bg-gray-900/98 w-full text-white'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
