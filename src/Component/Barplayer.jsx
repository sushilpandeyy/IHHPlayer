import {useState} from 'react'
import {Howl, Howler} from 'howler';
const Barplayer = () => {
  const [song, usesong]=useState("")
  const sound = new Howl({
    src: [song]
  });  
  return (
    <div onClick={()=>{sound.play()}}>barplayer 
    </div>
  )
}

export default Barplayer