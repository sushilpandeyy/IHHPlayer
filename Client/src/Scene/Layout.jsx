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
       
        </div>
      <center className='animate-pulse'>
      <center> <h3 className="animate-pulse">Loading!!</h3></center> 
        <img src={logo} alt="" />
        <center> <h4 className="animate-pulse">"Click on Play after selecting music"</h4></center> 
      </center>
      <div className="heading">
        
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