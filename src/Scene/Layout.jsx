import { useState } from 'react';
import "../App.css";
import Barplayer from '../Component/Barplayer';
import Headmenu from '../Component/Headmenu.jsx';
import Home from "./Home";
import Recent from "./recent";
import Search from "./Search";
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
   <>
  <div className="maincontent">
    <div className="Headermenu">
      <Headmenu/>
    </div>
  <div className="box2">  
  <div className="sidecontent">
  <Barplayer/>
  </div>
  <div className="allaudio theme">
  <Outlet/>
  </div>
  </div>
  </div>
   </>
  )
}

export default Layout