import { useState } from 'react'
import "../App.css"


const Layout = () => {
  return (
   <>
  <div className="maincontent">
  <div className="box2">  
  <div className="sidecontent">
    <div className="lis theme">
      list
    </div>
    <div className="recent theme">
      Recent
    </div>
  </div>
  <div className="allaudio theme">
    ALL AUDIO
  </div>
  </div>
  <div className="player theme">
    PLAYER
  </div>  
  </div>
   </>
  )
}

export default Layout