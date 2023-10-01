import { useState } from 'react';
import "../App.css";
import Barplayer from './barplayer';
import Home from "./Home";
import Menu from "./menu";
import Recent from "./recent";

const Layout = () => {
  return (
   <>
  <div className="maincontent">
  <div className="box2">  
  <div className="sidecontent">
    <div className="lis theme">
      <Menu/>
    </div>
    <div className="recent theme">
      <Recent/>
    </div>
  </div>
  <div className="allaudio theme">
    <Home/>
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