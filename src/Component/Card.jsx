import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className="card-outer" >
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <h4>{props.art}</h4>
    </div>
  )
}

export default Card