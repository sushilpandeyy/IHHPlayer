import React, { useState } from 'react';
import '../App.css';
import usePlayingStore from '../State/playing.js';
import axios from 'axios';
import plusicon from "../assets/plusicon.png"
import Playicon from "../assets/play.png"
import {IconHeart, IconHeartFilled} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const mainurl = "http://localhost:3000"
//const mainurl = "https://api.contactsushil.me"

const Card = (props) => {

  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  const play = usePlayingStore((state) => state.play);
  const addrecent = usePlayingStore((state) => state.addrecent);
  const handleclick = () => {
    addrecent(props);
    play(props);
  };

  const useridinfo = getCookie('userID');
  console.log(props)
  const handleLike = async () => {  
    try {
      const response = await axios.post(mainurl+'/likemusic', {
        user_id: useridinfo,
        song_id: props.key
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error adding liked music:', error);
    }
  };

  const handledislike = () =>{

  }

  return (
    <div
      className="card-outer drop-shadow-2xl place-items-start overflow-hidden" onClick={handleclick} 
    >
      <span className="image-card-m">
      <img className='card-img w-40' onClick={handleclick} src={props.img} alt="" height="600px" />
      </span>
      <span className="btnplusfl">
      </span>
      <div className="flex justify-between content-center p-1">
      <div className="p">
      <span className="cardtitlearea">
      <h3 className="cardtitle text-xl">{props.title}</h3>
      </span>
     <span className="cardsubtitlearea">
      <h4 className="cardsubtitle text-sm	">{props.artist}</h4>
     </span>
     </div>
     <div className="p">
      {(useridinfo)?(props.is_liked)?<IconHeartFilled onClick={handledislike}/>:<IconHeart onClick={handleLike}/>:<Link to={'/login'}><IconHeart/></Link>}
     </div>
     </div>
    </div>
  );
};

export default Card;
