import {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import {Howl, Howler} from 'howler';
import { useSelector } from 'react-redux';

const Barplayer = () => {

  const all=useSelector(state=>state.init);
  const [song, setsong] = useState(all[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(()=>{
    setsong(all[0].id)
  },all)
    const sound = new Howl({
     src: [song]
    });


  return (
    <div onClick={()=>{sound.play}}>{all[0].title} 
    </div>
  )
  };

export default Barplayer