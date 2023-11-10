import { useState } from 'react';
import "../App.css";
import Barplayer from '../Component/Barplayer';
import Home from "./Home";
import Menu from "./menu";
import Recent from "./recent";
import Search from "./Search";
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
   <>
  <div className="maincontent">
  <div className="box2">  
  <div className="sidecontent">
    
  </div>
  <div className="allaudio theme">
  <Outlet/>
  </div>
  </div>
  <div className="player theme">
    <Barplayer/>
  </div>  
  </div>
   </>
  )
}

export default Layout