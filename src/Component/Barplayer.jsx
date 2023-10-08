import {useState} from 'react'
import {Howl, Howler} from 'howler';
import { useSelector } from 'react-redux';
const Barplayer = () => {
  const all=useSelector(state=>state.init);
  const song=all[0].id;
  const sound = new Howl({
    src: [song]
  });  
  return (
    <div onClick={()=>{sound.play();}}>barplayer 
    </div>
  )
}

export default Barplayer