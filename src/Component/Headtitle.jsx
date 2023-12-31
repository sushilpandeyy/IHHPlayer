import React from 'react'
import { Link } from 'react-router-dom'

const Headtitle = (props) => {
  var link='/';
  if(props.title=="Popular Artist"){
    link='/artist'
  }
  else if(props.title=="Latest Songs"){
    link='/latest'
  }
  return (
    <>
    <div className="bar">
        <div className="headline">
            <h2 className='text-2xl'>{props.title}</h2>
        </div>
        <div className="all">
            <p className='showall'><Link to={link}>Show All</Link></p>
        </div>
    </div>
    </>
  )
}

export default Headtitle