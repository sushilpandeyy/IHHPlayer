import React from 'react'
import logo from "../../public/ihhlogo.png"
import '../Scene/Scene.css'

const Loader = () => {
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

export default Loader