import React from 'react';
import { useParams } from 'react-router-dom';
import Headtitle2 from '../Component/Headtitle2';
import { all } from '../../Data/newalb.js';
import Card from '../Component/Card.jsx';

const Artistmusic = () => {
  const { id } = useParams();

  function artcreate(item){
    if(item.artistkey && item.artistkey.includes(id)){
      return (
        <Card
          key={item.src}
          src={item.src}
          album={item.album}
          genre={item.genre}
          img={item.img}
          title={item.title}
          artist={item.artist}
        />
      );
    }
    return null;
  }
  const titlee = `Discography`;

  return (
    <>
      <Headtitle2 title={titlee} />
      <div className="grid grid-cols-5 gap-2 mobilecards">
        {all.map(artcreate)}
      </div>
    </>
  );
};

export default Artistmusic;
