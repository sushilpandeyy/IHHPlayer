import React from 'react'
import logo from "../../public/ihhlogo.png"
import '../index.css'
import '../App.css'
const Headmenu = () => {
  return (
    <>
    <div className="headmenu-logo">
      <img src={logo} alt="" height="50px" width="50px"/>
    </div>
    <div className="center-menu">
      <ul className='flex flex-nowrap'>
        <li className='menu-mar'>Home</li>
        <li className='menu-mar'>Artist</li>
        <li className='menu-mar'>Genre</li>
        <li className='menu-mar'>Album</li>
        <li className='menu-mar'>Search</li>
      </ul>
    </div>
    <div className="logo-menu">
      <img src={logo} alt=""  height="50px" width="50px"/>
    </div>
    </>
  )
}

export default Headmenu