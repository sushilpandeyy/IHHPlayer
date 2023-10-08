import React from 'react'
import './Card.css'
import { useDispatch } from 'react-redux';
import { add } from '../features/add/add.js';

const Card = (props) => {
  const dispatch = useDispatch();

  const addsong = () => {
    dispatch(add(props));
  }

  return (
    <div className="card-outer" onClick={addsong}>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <h4>{props.art}</h4>
    </div>
  )
}

export default Card;
