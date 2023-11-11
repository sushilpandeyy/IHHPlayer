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
    <div className="card-outer drop-shadow-2xl place-items-start overflow-hidden" 
    onClick={addsong}>
        <img className='card-img' src={props.img} alt="" />
        <p className='card-tit text-xl'>{props.title}</p>
        <p className='card-art text-sm'>{props.art}</p>
    </div>
  )
}

export default Card;
