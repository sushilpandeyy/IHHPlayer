import React, { useState } from 'react';
import '../App.css';
import usePlayingStore from '../State/playing.js';
import plusicon from "../assets/plusicon.png"
import Playicon from "../assets/play.png"

const Card = (props) => {
  const play = usePlayingStore((state) => state.play);
  const addrecent = usePlayingStore((state) => state.addrecent);
  const handleclick = () => {
    addrecent(props);
    play(props);
  };

  const handleaddmuic = () => {
    
  };
  return (
    <div
      className="card-outer drop-shadow-2xl place-items-start overflow-hidden" onClick={handleclick} 
    >
      <span className="image-card-m">
      <img className='card-img w-40' onClick={handleclick} src={props.img} alt="" height="600px" />
      </span>
      <span className="btnplusfl">
      </span>
      <span className="cardtitlearea">
      <h3 className="cardtitle text-xl">{props.title}</h3>
      </span>
     <span className="cardsubtitlearea">
      <h4 className="cardsubtitle text-sm	">{props.artist}</h4>
     </span>
    </div>
  );
};

export default Card;
