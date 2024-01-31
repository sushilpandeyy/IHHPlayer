import React, { useState } from 'react';
import './Card.css';
import usePlayingStore from '../State/playing.js';
import plusicon from "../assets/plusicon.png"
import Playicon from "../assets/play.png"

const Card = (props) => {
  const play = usePlayingStore((state) => state.play);
  const handleclick = () => {
    play(props);
   // setisplaying(true);
  };
  const handleaddmuic = () => {
    
  };
  return (
    <div
      className="card-outer drop-shadow-2xl place-items-start overflow-hidden"
    >
      <span className="image-card-m">
      <img className='card-img w-40' onClick={handleclick} src={props.img} alt="" height="600px" />
      </span>
      <span className="btnplusfl">
      <span>
      <img src={Playicon} className='btnplusimg' onClick={handleclick} alt="Play" />
      </span>
      <span>
      <img src={plusicon} className='btnplusimg' alt="Add"  onClick={handleaddmuic} />
      </span>
      </span>
      <span className="cardtitlearea">
      <h3 className="cardtitle">{props.title}</h3>
      </span>
     <span className="cardsubtitlearea">
      <h4 className="cardsubtitle">{props.artist}</h4>
     </span>
    </div>
  );
};

export default Card;
