import React, { useState } from 'react';
import './Card.css';
import usePlayingStore from '../State/playing.js';

const Card = (props) => {
  const addsong = usePlayingStore((state) => state.addsong);
  const {playing} = usePlayingStore((state) => ({
    playing: state.playing
  })
  )
  const [ppp, setppp] = useState(playing);
  const handleclick = () => {
    setppp(props)
    addsong(props);
  };
  return (
    <div
      className="card-outer drop-shadow-2xl place-items-start overflow-hidden"
      onClick={handleclick}
    >
      <span className="image-card-m">
      <img className='card-img w-40' src={props.img} alt="" height="600px" />
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
