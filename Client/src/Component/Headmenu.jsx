import React from 'react'
import logo from "../../public/ihhlogo.png"
import '../index.css'
import '../App.css'
import { Link } from 'react-router-dom'
const Headmenu = () => {
  return (
    <>
    <div className="headmenu-logo">
      <img src={logo} alt="" height="50px" width="50px"/>
    </div>
    <div className="center-menu">
      <ul className='flex flex-nowrap'>
        <li className='menu-mar'><Link to="/">Home</Link></li>
        <li className='menu-mar'><Link to="/artist">Artist</Link></li>
        <li className='menu-mar'><Link to="/album">Album</Link></li>
      </ul>
    </div>
    <div className="logo-menu">
      <img src={logo} alt=""  height="50px" width="50px"/>
    </div>
    </>
  )
}

export default Headmenu