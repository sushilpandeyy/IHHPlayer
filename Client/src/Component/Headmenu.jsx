import {useState} from 'react'
import logo from "../../public/ihhlogo.png"
import '../index.css'
import '../App.css'
import Login from './Login'
import { Link } from 'react-router-dom'
const Headmenu = () => {

  const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };
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
    <div>
           <Link to="/login">Login</Link>
        </div>
    </div>
    </>
  )
}

export default Headmenu