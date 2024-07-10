import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
function Main() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Main