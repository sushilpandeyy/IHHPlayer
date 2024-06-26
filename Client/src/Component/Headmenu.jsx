import {useState} from 'react'
import logo from "../../public/ihhlogo.png"
import '../index.css'
import '../App.css'
import Login from './Login'
import { Link } from 'react-router-dom'

const getCookie = (name) => {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};


const Headmenu = () => {
    const username=getCookie('Name');

    const Lineco = () => {
      const [isHovered, setIsHovered] = useState(false);
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      return (
        <>
      {isHovered ? (
        <span onMouseLeave={handleMouseLeave} onClick={()=>{
          deleteCookie('userID');
          deleteCookie('Name');
          window.location.reload();
        }}>Logout</span>
      ):(
        <span
          onMouseEnter={handleMouseEnter}
          className="whitespace-nowrap"
        >
          {"Hey, " + username}
        </span>
      )}
    </>
      )
    }
    
  return (
    <>
    <div className="headmenu-logo">
      <img src={logo} alt="" height="50px" width="50px"/>
    </div>
    <div className="center-menu">
      <ul className='flex flex-nowrap'>
        <li className='menu-mar'><Link to="/">Home</Link></li>
        <li className='menu-mar'><Link to="/explore">Explore</Link></li>
        <li className='menu-mar'><Link to="/album">Playlist</Link></li>
        <li className='menu-mar'><Link to="/internal/ytadd">Add</Link></li>
      </ul>
    </div>
    <div className="logo-menu w-auto">
    <span className='whitespace-nowrap'>
           {(username)?<Lineco/>:<Link to="/login">Login</Link>}
        </span>
    </div>
    </>
  )
}

export default Headmenu