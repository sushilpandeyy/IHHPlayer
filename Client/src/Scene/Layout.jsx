import "../App.css";
import Barplayer from '../Component/Barplayer';
import Headmenu from '../Component/Headmenu.jsx';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import logo from "../../public/ihhlogo.png"
import '../Scene/Scene.css'

const Layout = () => {
  function Preloader(){
    return (
      <>
      <div className="prelaoderdiv">
        <div className="heading">
         <center> <h3 className="animate-pulse">Loading!!</h3></center> 
        </div>
      <center className='animate-pulse'>
        <img src={logo} alt="" />
      </center>
      <div className="heading">
         <center> <h4 className="animate-pulse">"Click on Play after selecting music"</h4></center> 
        </div>
      </div>
      </>
    )
  }

  return (
   <>
   <Preloader/>
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